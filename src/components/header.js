import React from "react"
import Drawer from "./drawer"
import { Link } from "gatsby"

export default function Home() {
  return (
    <header className="partsGrid header">
      <Link to={`/`}>
        <span className="siteName">KUROBO</span>
      </Link>
      <Drawer />
    </header>
  )
}
