const path = require("path")
const axios = require("axios")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogresult = await graphql(`
    query {
      allMicrocmsBlog(sort: { fields: publishDate, order: DESC }) {
        edges {
          node {
            id
            slug
          }
          next {
            slug
            title
          }
          previous {
            slug
            title
          }
        }
      }
    }
  `)
  if (blogresult.errors) {
    reporter.panicOnBuild(`GraphQLのクエリでエラーが発生しました`)
    return
  }
  blogresult.data.allMicrocmsBlog.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: `/blog/post/${node.slug}/`,
      component: path.resolve(`./src/templates/blogpost-template.js`),
      context: {
        id: node.id,
        next,
        previous,
      },
    })
  })
  const blogPostsPerPage = 8
  const blogPosts = blogresult.data.allMicrocmsBlog.edges.length
  const blogPages = Math.ceil(blogPosts / blogPostsPerPage)
  Array.from({ length: blogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}/`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        skip: blogPostsPerPage * i,
        limit: blogPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === blogPages,
      },
    })
  })
}

exports.onCreateNode = async ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MicrocmsBlog`) {
    const results = await axios.get(`${node.eyecatch.url}?fm=json`)
    const { data } = results
    createNodeField({
      node,
      name: "width",
      value: data.PixelWidth,
    })
    createNodeField({
      node,
      name: "height",
      value: data.PixelHeight,
    })
  }
}
