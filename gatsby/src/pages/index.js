import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Carousel from "react-bootstrap/Carousel"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import "../styles/global.scss"
import "../styles/splash-page.scss"

const FluidImage = ({ node }) => {
  return <Img fluid={node.photo.asset.fluid} />
}

const renderPhotoSlides = photos => {
  return photos.nodes.map((node, i) => {
    return (
      <Carousel.Item key={i}>
        <FluidImage node={node} />
      </Carousel.Item>
    )
  })
}

// {renderPhotos(photos)}

const SplashPage = ({ data }) => {
  const { linkedIn, instagram } = data.contact.nodes[0]
  const { name, description } = data.brand.group[0].nodes[0]

  return (
    <main id="splash">
      <div id="content">
        <div id="brand">
          <h1>{name}</h1>
          <h2>{description}</h2>
        </div>
        <ul id="links">
          <li>
            <Link to="/portraiture">Portraiture</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul id="social">
          <li>
            <a href={instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href={linkedIn}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>

      <Carousel controls={false} indicators={false} fade={true}>
        {renderPhotoSlides(data.photos)}
      </Carousel>
    </main>
  )
}

export const query = graphql`
  query SplashPageQuery {
    photos: allSanitySplashpagePhoto {
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
        linkedIn
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
