import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <footer className="partsGrid footer">
      <nav>
        <Link to={`/blog/`}>note一覧</Link>
        <Link to={`/portfolio/`}>ポートフォリオ</Link>
        <Link to={`/portfolio/#profile`}>プロフィール</Link>
      </nav>
      <Link to={`/`}>
        <span className="siteName">KUROBO</span>
      </Link>
    </footer>
  )
}
