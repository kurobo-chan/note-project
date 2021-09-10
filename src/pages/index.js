import React from "react"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import Wave from "../animations/wave"

export default function Home()
{
  return (
    <div class="home">
      <Layout>
        <main>
          <section className="partsGrid latestPost">
            <article className="grid12">
              <div className="textBox">
                <h1>スクロールして要素が見えたらクラスを追加するJavaScript</h1>
                <p>
                  最近、スクロールして要素が見えたら指定の要素をアニメーションさせる動作をさせるサイトをよく見ます。私もそんなおしゃれなサイトを作成したいのですがその場合、苦手分野でもあるJavaScriptを使うのでどうしてもプラグインで逃げて今まで過ごしてきました・・・。流石にこのままではいけませんので一からコードを書けるように頑張ってみました。
                </p>
              </div>
              <figure className="eyecatch">
                <img src="/images/test.jpg" alt="" />
              </figure>
            </article>
            <div className="grid12">
              <a href="note.html" className="moreBtn">
                Go to this page
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </section>
          <section className="partsGrid posts">
            <div className="containerTitle">
              <h2>NOTE</h2>
              <span>Note</span>
            </div>
            <div className="cardContainer grid12">
              <a href="note.html" tabIndex={0} className="card">
                <article>
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" className="hvr-grow" />
                  </figure>
                  <div className="cardContent">
                    <h3>スクロールして要素が見えたらクラスを追加す…</h3>
                  </div>
                </article>
              </a>
              <a href="#" tabIndex={0} className="card">
                <article>
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>スクロールして要素が見えたらクラスを追加す…</h3>
                  </div>
                </article>
              </a>
              <a href="#" tabIndex={0} className="card">
                <article>
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>スクロールして要素が見えたらクラスを追加す…</h3>
                  </div>
                </article>
              </a>
              <a href="#" tabIndex={0} className="card">
                <article>
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>スクロールして要素が見えたらクラスを追加す…</h3>
                  </div>
                </article>
              </a>
            </div>
            <a href="posts.html" className="moreBtn">
              Note一覧
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </section>
          <section className="portfolio">
            <Wave/>
            <div className="partsGrid">
              <div className="containerTitle">
                <h2>PORTFOLIO</h2>
                <span>Portfolio</span>
              </div>
              <div className="cardContainer grid12">
                <article className="card">
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" className="hvr-grow" />
                  </figure>
                  <div className="cardContent">
                    <h3>作品のタイトル</h3>
                    <div className="linkList">
                      <a href="#" className="webPageBtn hvr-fade">
                        <FontAwesomeIcon icon={faHome} />
                      </a>
                      <a href="#" className="githubBtn hvr-fade">
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="card">
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>作品のタイトル</h3>
                    <div className="linkList">
                      <a href="#" className="webPageBtn">
                        <i className="fas fa-home" />
                      </a>
                      <a href="#" className="githubBtn">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="card">
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>作品のタイトル</h3>
                    <div className="linkList">
                      <a href="#" className="webPageBtn">
                        <i className="fas fa-home" />
                      </a>
                      <a href="#" className="githubBtn">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </article>
                <article className="card">
                  <figure className="eyecatch">
                    <img src="/images/test.jpg" alt="" />
                  </figure>
                  <div className="cardContent">
                    <h3>作品のタイトル</h3>
                    <div className="linkList">
                      <a href="#" className="webPageBtn">
                        <i className="fas fa-home" />
                      </a>
                      <a href="#" className="githubBtn">
                        <i className="fab fa-github" />
                      </a>
                    </div>
                  </div>
                </article>
              </div>
              <a href="portfolio.html" className="moreBtn">
                Portfolio一覧
                <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </section>
        </main>
      </Layout>
    </div>
  )
}
