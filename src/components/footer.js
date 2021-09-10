import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <footer className="partsGrid footer">
      <nav>
        <a href="posts.html">note一覧</a>
        <a href="portfolio.html">ポートフォリオ</a>
        <a href="portfolio.html#profile">プロフィール</a>
      </nav>
      <Link to={`/`}>
        <span className="siteName">KUROBO</span>
      </Link>
    </footer>
  )
}
