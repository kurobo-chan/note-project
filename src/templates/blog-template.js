import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faFeather,
} from "@fortawesome/free-solid-svg-icons"
import Border from "../components/border"
import { graphql, Link } from "gatsby"
import Imgix from "react-imgix"

export default function Home({ location, data, pageContext }) {
  return (
    <Layout>
      <SEO
        pagetitle="ブログ一覧"
        pagedesc="KUROBOのブログ一覧です"
        pagepath={location.pathname}
      />
      <main>
        <div className="partsGrid pageTitle">
          <div className="grid12">
            <h1>
              <FontAwesomeIcon icon={faFeather} />
              KUROBO note
            </h1>
            <div className="tag">
              {data.allMicrocmsTag.edges.map(({ node }) => (
                <a href="tag.html" key={node.id}>
                  {node.tag}
                </a>
              ))}
            </div>
          </div>
        </div>
        <section className="partsGrid posts">
          <div className="cardContainer grid12">
            {data.allMicrocmsBlog.edges.map(({ node }) => (
              <Link
                to={`/blog/post/${node.slug}/`}
                tabIndex={0}
                className="card"
                key={node.id}
              >
                <article>
                  <figure className="eyecatch">
                    <Imgix
                      src={node.eyecatch.url}
                      htmlAttributes={{
                        alt: node.title,
                      }}
                      className="hvr-grow"
                    />
                  </figure>
                  <div className="cardContent">
                    <h3>{`${node.title.slice(0, 22)}…`}</h3>
                  </div>
                </article>
              </Link>
            ))}
            <div className="pagination grid12">
              <nav>
                {!pageContext.isFirst && (
                  <Link
                    to={
                      pageContext.currentPage === 2
                        ? `/blog/`
                        : `/blog/${pageContext.currentPage - 1}/`
                    }
                    rel="prev"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                    PREV
                  </Link>
                )}
                {!pageContext.isLast && (
                  <Link to={`/blog/${pageContext.currentPage + 1}/`} rel="next">
                    NEXT
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                )}
              </nav>
            </div>
          </div>
        </section>
      </main>
      <Border />
    </Layout>
  )
}
export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMicrocmsBlog(
      sort: { order: DESC, fields: publishDate }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          eyecatch {
            url
          }
          fields {
            height
            width
          }
          id
          slug
        }
      }
    }
    allMicrocmsTag {
      edges {
        node {
          tag
          tagSlug
          id
        }
      }
    }
  }
`
