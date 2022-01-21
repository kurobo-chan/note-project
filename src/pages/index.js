import React from "react"
import SEO from "../components/seo"

export default function Refresh() {
  return (
    <React.Fragment>
      <SEO />
      <p>ページは移転しました。</p>
      <p>5秒経つと自動的に新ページに切り替わります。</p>
      <p>
        自動で替わらない場合は
        <a
          href="https://kurobochan2022-01.netlify.app"
          style={{ color: "blue" }}
        >
          KUROBOのメインサイト（新URL）
        </a>
        をクリックしてください。
      </p>
    </React.Fragment>
  )
}
