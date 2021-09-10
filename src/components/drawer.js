import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFeather, faKiwiBird, faDragon } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"

export default function Home() {
  function navFunc() {
    document.querySelector("html").classList.toggle("open")
  }

  return (
    <div className="navBlock">
      <button className="navBtn" onClick={navFunc}>
        <span className="sr-only">MENU</span>
      </button>
      <nav className="nav">
        <div className="navInner">
          <a href="posts.html">
            <FontAwesomeIcon icon={faFeather} />
            <span>note一覧</span>
          </a>
          <a href="portfolio.html">
            <FontAwesomeIcon icon={faKiwiBird} />
            <span>ポートフォリオ</span>
          </a>
          <Link to={`/`}>
            <FontAwesomeIcon icon={faDragon} />
            <span>プロフィール</span>
          </Link>
        </div>
      </nav>
      <div
        className="navBack"
        role="presentation
		"
      />
    </div>
  )
}
