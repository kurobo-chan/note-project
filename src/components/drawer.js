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
          <Link to={`/blog/`} onClick={navFunc}>
            <FontAwesomeIcon icon={faFeather} />
            <span>note一覧</span>
          </Link>
          <Link to={`/portfolio/`} onClick={navFunc}>
            <FontAwesomeIcon icon={faKiwiBird} />
            <span>ポートフォリオ</span>
          </Link>
          <Link to={`/portfolio/#profile`} onClick={navFunc}>
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
