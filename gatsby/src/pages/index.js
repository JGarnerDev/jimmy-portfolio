import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import Carousel from "react-bootstrap/Carousel"

import FluidImage from "../components/FluidImage"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import "../styles/global.scss"
import "../styles/splash-page.scss"

const renderBackgroundSlides = photos =>
  photos.nodes.map((node, i) => {
    return (
      <Carousel.Item key={i}>
        <FluidImage node={node} />
      </Carousel.Item>
    )
  })

const SplashPage = ({ data }) => {
  const { instagram } = data.contact.nodes[0]
  const { name, description } = data.brand.group[0].nodes[0]

  return (
    <main className="splash-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jimmy Karamanis Photography </title>
        <link rel="canonical" href="https://jimmykphotography.netlify.app/" />
      </Helmet>
      <div className="content">
        <div id="brand">
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
        <ul id="links">
          <li>
            <Link to="/portraiture">city+lifestyle</Link>
          </li>
          <li>
            <Link to="/portraiture">Portraiture</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <ul id="social">
          <li>
            <a href={instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>

      <Carousel controls={false} indicators={false} fade={true}>
        {renderBackgroundSlides(data.photos)}
      </Carousel>
    </main>
  )
}

export const query = graphql`
  query SplashPageQuery {
    photos: allSanitySplashpagePhoto(sort: { fields: name, order: ASC }) {
      nodes {
        photo {
          asset {
            fluid(maxWidth: 4000) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
    contact: allSanityContactInfo {
      nodes {
        instagram
      }
    }
    brand: allSanityBrand {
      group(field: _id) {
        nodes {
          name
          description
        }
      }
    }
  }
`

export default SplashPage
