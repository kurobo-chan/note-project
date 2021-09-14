import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Wave from "../animations/wave"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"
import Imgix from "react-imgix"
import htmlToText from "html-to-text"

export default function Home({ data }) {
  const pb =
    (data.microcmsBlog.eyecatch.height / data.microcmsBlog.eyecatch.width) * 100
  return (
    <div className="home">
      <Layout>
        <SEO />
        <main>
          <section className="partsGrid latestPost">
            <article className="grid12">
              <div className="textBox">
                <h1>{data.microcmsBlog.title}</h1>
                <p>
                  {`${htmlToText
                    .fromString(data.microcmsBlog.content, {
                      ignoreImage: true,
                      ignoreHref: true,
                    })
                    .slice(0, 200)}…`}
                </p>
              </div>
              <figure className="eyecatch">
                <div
                  className="eyecatch-wrapper"
                  style={{ paddingBottom: `${pb}%` }}
                >
                  <Imgix
                    src={data.microcmsBlog.eyecatch.url}
                    sizes="100%"
                    htmlAttributes={{
                      alt: data.microcmsBlog.title,
                    }}
                  />
                </div>
              </figure>
            </article>
            <div className="grid12">
              <Link
                to={`/blog/post/${data.microcmsBlog.slug}`}
                className="moreBtn"
              >
                Go to this page
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </section>
          <section className="partsGrid posts">
            <div className="containerTitle">
              <h2>NOTE</h2>
              <span>Note</span>
            </div>
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
            </div>
            <Link to={`/blog/`} className="moreBtn">
              Note一覧
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </section>
          <section className="portfolio">
            <Wave />
            <div className="partsGrid">
              <div className="containerTitle">
                <h2>PORTFOLIO</h2>
                <span>Portfolio</span>
              </div>
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
              </div>
              <Link to={`/portfolio/`} className="moreBtn">
                Portfolio一覧
                <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    allMicrocmsPortfolio(
      sort: { order: DESC, fields: publishDate }
      skip: 0
      limit: 4
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
    microcmsBlog {
      title
      content
      slug
      eyecatch {
        url
        height
        width
      }
    }
    allMicrocmsBlog(
      sort: { order: DESC, fields: publishDate }
      limit: 4
      skip: 0
    ) {
      edges {
        node {
          title
          eyecatch {
            url
          }
          id
          slug
        }
      }
    }
  }
`
