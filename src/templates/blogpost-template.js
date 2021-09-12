import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Border from "../components/border"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCaretRight,
  faFeather,
  faClock,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"
import { faTwitter, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { graphql, Link } from "gatsby"
import Imgix from "react-imgix"
import htmlToText from "html-to-text"
import { unified } from "unified"
import parse from "rehype-parse"
import rehypeReact from "rehype-react"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  Fragment: React.Fragment,
  components: {
    img: props => {
      return (
        <Imgix
          src={props.src}
          sizes="(max-width: 785px) 100vw, 785px"
          htmlAttributes={{
            alt: props.alt,
          }}
        />
      )
    },
  },
}).Compiler

export default function Home({ location, data, pageContext }) {
  const htmlAst = unified()
    .use(parse, { fragment: true })
    .parse(data.microcmsBlog.content)
  const pb =
    (data.microcmsBlog.fields.height / data.microcmsBlog.fields.width) * 100
  return (
    <Layout>
      <SEO
        pagetitle={data.microcmsBlog.title}
        pagepath={location.pathname}
        pagedesc={`${htmlToText
          .fromString(data.microcmsBlog.content, {
            ignoreImage: true,
            ignoreHref: true,
          })
          .slice(0, 70)}…`}
        blogimg={data.microcmsBlog.eyecatch.url}
        pageimgw={data.microcmsBlog.fields.width}
        pageimgh={data.microcmsBlog.fields.height}
      />
      <div>
        <main className="entry">
          <Border />
          <div className="partsGrid">
            <div className="pageTitle">
              <div className="grid12">
                <div className="bread">
                  <Link to={`/blog/`}>
                    <span>
                      <FontAwesomeIcon icon={faFeather} />
                    </span>{" "}
                    KUROBO note
                  </Link>
                  <span>
                    <FontAwesomeIcon icon={faCaretRight} />
                  </span>
                  {data.microcmsBlog.tag.map(cat => (
                    <a href="#" className="tagBtn" key={cat.id}>
                      {cat.tag}
                    </a>
                  ))}
                </div>
                <h1>{data.microcmsBlog.title}</h1>
                <time dateTime={data.microcmsBlog.publishDate}>
                  <span>
                    <FontAwesomeIcon icon={faClock} />
                  </span>
                  {data.microcmsBlog.publishDateJP}
                </time>

                <figure className="eyecatch">
                  <div
                    className="eyecatch-wrapper"
                    style={{ paddingBottom: `${pb}%` }}
                  >
                    <Imgix
                      src={data.microcmsBlog.eyecatch.url}
                      htmlAttributes={{
                        alt: data.microcmsBlog.title,
                      }}
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
          <Border />
          <section className="partsGrid">
            <article className="entryBody grid12">{renderAst(htmlAst)}</article>
            <div className="grid12">
              <div className="snsShare">
                <a href="#" className="twitter">
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faTwitter} />
                  <i className="fab fa-twitter" />
                  SHARE
                </a>
                <a href="#" className="facebook">
                  <span className="sr-only">facebook</span>
                  <FontAwesomeIcon icon={faFacebookF} />
                  SHARE
                </a>
              </div>
            </div>
            <div className="pagination grid12">
              <nav>
                {pageContext.next && (
                  <Link to={`/blog/post/${pageContext.next.slug}/`} rel="prev">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    {pageContext.next.title}
                  </Link>
                )}
                {pageContext.previous && (
                  <Link
                    to={`/blog/post/${pageContext.previous.slug}/`}
                    rel="next"
                  >
                    {pageContext.previous.title}
                    <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                )}
              </nav>
            </div>
          </section>
        </main>
        <Border />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      title
      publishDateJP: publishDate(formatString: "YYYY.MM.DD")
      publishDate
      tag {
        tag
        tagSlug
        id
      }
      eyecatch {
        url
      }
      fields {
        height
        width
      }
      content
    }
  }
`
