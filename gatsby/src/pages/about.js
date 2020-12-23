import React from "react"
import { graphql } from "gatsby"

import Nav from "../components/Nav"

import "../styles/info-page.scss"

const AboutPage = ({ data: { about } }) => {
  const renderParagraphs = () => {
    return about.nodes[0].text.map(textblock => {
      return <p>{textblock.children[0].text}</p>
    })
  }

  return (
    <main className="info-page">
      <Nav />

      <div className="content">
        <h2>{about.nodes[0].title}</h2>
        {renderParagraphs()}
      </div>
    </main>
  )
}
export const query = graphql`
  query AboutPageQuery {
    about: allSanityAbout {
      nodes {
        title
        text {
          children {
            text
          }
        }
      }
    }
  }
`

export default AboutPage
