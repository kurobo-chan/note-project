import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
  faKiwiBird,
  faHome,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link } from "gatsby"
import Imgix from "react-imgix"
import Profile from "../components/profile"

export default function Home({ data, location, pageContext }) {
  return (
    <Layout>
      <SEO
        pagetitle="ポートフォリオ"
        pagedesc="ポートフォリオ一覧"
        pagepath={location.pathname}
      />
      <div>
        <main className="portfolio">
          <div className="partsGrid pageTitle">
            <div className="grid12">
              <h1>
                <FontAwesomeIcon icon={faKiwiBird} />
                My Portfolio
              </h1>
            </div>
          </div>
          <section className="partsGrid posts">
            <div className="cardContainer grid12">
              {data.allMicrocmsPortfolio.edges.map(({ node }) => (
                <article className="card" key={node.id}>
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
                    <h3>{node.title}</h3>
                    <div className="linkList">
                      <Link
                        to={`/works/${node.slug}/`}
                        className="webPageBtn hvr-fade"
                      >
                        <FontAwesomeIcon icon={faHome} />
                      </Link>
                      <a
                        href={node.githuburl}
                        className="githubBtn hvr-fade"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}

              <div className="pagination grid12">
                <nav>
                  {!pageContext.isFirst && (
                    <Link
                      to={
                        pageContext.currentPage === 2
                          ? `/portfolio/`
                          : `/portfolio/${pageContext.currentPage - 1}/`
                      }
                      rel="prev"
                    >
                      <FontAwesomeIcon icon={faChevronLeft} />
                      PREV
                    </Link>
                  )}
                  {!pageContext.isLast && (
                    <Link
                      to={`/portfolio/${pageContext.currentPage + 1}/`}
                      rel="next"
                    >
                      NEXT
                      <FontAwesomeIcon icon={faChevronRight} />
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          </section>
        </main>
       <Profile/>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMicrocmsPortfolio(
      sort: { order: DESC, fields: publishDate }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          eyecatch {
            height
            url
            width
          }
          githuburl
          title
        }
      }
    }
  }
`
