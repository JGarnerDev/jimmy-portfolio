import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Nav from "../components/Nav"

import "../styles/info-page.scss"

const AboutPage = ({ data: { about } }) => {
  const renderParagraphs = () => {
    return about.nodes[0].text.map(textblock => {
      return <p>{textblock.children[0].text}</p>
    })
  }

  const renderImage = () => {
    return <Img fluid={about.nodes[0].photo.asset.fluid} />
  }

  return (
    <main className="info-page about">
      <Nav />

      <div className="content">
        <div className="img">{renderImage()}</div>
        <div className="text">
          <h2>{about.nodes[0].title}</h2>
          {renderParagraphs()}
        </div>
      </div>
    </main>
  )
}
export const query = graphql`
  query AboutPageQuery {
    about: allSanityAbout {
      nodes {
        title
        photo {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
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
