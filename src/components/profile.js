import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import {
  faDragon
} from "@fortawesome/free-solid-svg-icons"

export default function Home()
{
	const data = useStaticQuery(graphql`
    query {
      microcmsProfile {
        profile
        sns1
      }
    }
  `)
  return (
    <aside className="partsGrid profile" id="profile">
      <div className="grid12">
        <h2>
          <FontAwesomeIcon icon={faDragon} />
          プロフィール
        </h2>
        <p>{data.microcmsProfile.profile}</p>
        <a
          href={data.microcmsProfile.sns1}
          className="snsIcon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="sr-only">Twitter</span>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </aside>
  )
}
