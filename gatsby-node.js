const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const blogresult = await graphql(`
    query {
      allMicrocmsPortfolio(sort: { order: DESC, fields: publishDate }) {
        edges {
          node {
            id
            slug
          }
          next {
            title
            slug
          }
          previous {
            title
            slug
          }
        }
      }
      allMicrocmsBlog(sort: { fields: publishDate, order: DESC }) {
        group(field: tag___tagSlug) {
          fieldValue
          totalCount
        }
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
      allMicrocmsTag {
        nodes {
          tag
          tagSlug
          tagId
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

  const portfolioPostsPerPage = 8 // １ページに表示する記事の数
  const portfolioPosts = blogresult.data.allMicrocmsPortfolio.edges.length // 記事の総数
  const portfolioPages = Math.ceil(portfolioPosts / portfolioPostsPerPage) // 記事一覧ページの総数
  Array.from({ length: portfolioPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/portfolio/` : `/portfolio/${i + 1}/`,
      component: path.resolve("./src/templates/portfolio-template.js"),
      context: {
        skip: portfolioPostsPerPage * i,
        limit: portfolioPostsPerPage,
        currentPage: i + 1,
        isFirst: i + 1 === 1,
        isLast: i + 1 === portfolioPages,
      },
    })
  })

  blogresult.data.allMicrocmsBlog.group.forEach(node => {
    const tagPostsPerPage = 8
    const tagPosts = node.totalCount
    const tagPages = Math.ceil(tagPosts / tagPostsPerPage)
    Array.from({ length: tagPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/tag/${node.fieldValue}/`
            : `/tag/${node.fieldValue}/${i + 1}/`,
        component: path.resolve(`./src/templates/tag-template.js`),
        context: {
          tagid: blogresult.data.allMicrocmsTag.nodes.find(
            n => n.tagSlug === node.fieldValue
          ).tagId,
          tagname: blogresult.data.allMicrocmsTag.nodes.find(
            n => n.tagSlug === node.fieldValue
          ).tag,
          tagslug: node.fieldValue,
          skip: tagPostsPerPage * i,
          limit: tagPostsPerPage,
          currentPage: i + 1,
          isFirst: i + 1 === 1,
          isLast: i + 1 === tagPages,
        },
      })
    })
  })
}
