import React from "react"
import { graphql } from "gatsby"

import Nav from "../components/Nav"
import FluidImage from "../components/FluidImage"

import "../styles/info-page.scss"

const AboutPage = ({ data: { about } }) => {
  const renderParagraphs = () =>
    about.nodes[0].text.map((textblock, i) => {
      return <p key={i}>{textblock.children[0].text}</p>
    })

  return (
    <main className="info-page about">
      <Nav />
      <div className="content">
        <div className="img">
          <FluidImage node={about.nodes[0]} />
        </div>
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
