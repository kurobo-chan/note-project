import React from "react"

export default function Home() {
  return (
    <div onload="init();" class="home">
      <header className="partsGrid header">
        <a href="index.html">
          <span className="siteName">KUROBO</span>
        </a>
        <div className="navBlock">
          <button className="navBtn" onclick="navFunc()">
            <span className="sr-only">MENU</span>
          </button>
          <nav className="nav">
            <div className="navInner">
              <a href="posts.html">
                <i className="fas fa-feather" />
                <span>note一覧</span>
              </a>
              <a href="portfolio.html">
                <i className="fas fa-kiwi-bird" />
                <span>ポートフォリオ</span>
              </a>
              <a href="portfolio.html#profile">
                <i className="fas fa-dragon" />
                <span>プロフィール</span>
              </a>
            </div>
          </nav>
          <div
            className="navBack"
            role="presentation
		"
          />
        </div>
      </header>
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
              <i className="fas fa-chevron-right" />
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
            <i className="fas fa-chevron-right" />
          </a>
        </section>
        <section className="portfolio">
          <div className="wave">
            <div id="animation_container" style={{ width: "100%" }}>
              <canvas id="canvas" style={{ position: "absolute" }} />
              <div
                id="dom_overlay_container"
                style={{
                  pointerEvents: "none",
                  overflow: "hidden",
                  position: "absolute",
                }}
              />
            </div>
          </div>
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
                      <i className="fas fa-home" />
                    </a>
                    <a href="#" className="githubBtn hvr-fade">
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
              <i className="fas fa-chevron-right" />
            </a>
          </div>
        </section>
      </main>
      <footer className="partsGrid footer">
        <nav>
          <a href="posts.html">note一覧</a>
          <a href="portfolio.html">ポートフォリオ</a>
          <a href="portfolio.html#profile">プロフィール</a>
        </nav>
        <a href="index.html">
          <span className="siteName">KUROBO</span>
        </a>
      </footer>
    </div>
  )
}
