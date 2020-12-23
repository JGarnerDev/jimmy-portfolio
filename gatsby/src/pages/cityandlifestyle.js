import React, { useState } from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Carousel from "react-bootstrap/Carousel"

import Nav from "../components/Nav"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

import "../styles/global.scss"
import "../styles/gallery-page.scss"

const CityAndLifestylePage = ({ data: { photos } }) => {
  const [openSlideShow, setOpenSlideShow] = useState(false)
  const [slideIndex, setSlideIndex] = useState(1)

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

  const prevSlide = () => {
    if (slideIndex <= 1) {
      return photos.nodes.length
    }
    return slideIndex - 1
  }
  const nextSlide = () => {
    if (slideIndex >= photos.nodes.length) {
      return 1
    }
    return slideIndex + 1
  }

  const renderSlideShow = () => {
    return (
      <Carousel
        indicators={false}
        fade={true}
        activeIndex={slideIndex}
        interval={null}
        touch={true}
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
            onClick={() => {
              setSlideIndex(prevSlide())
            }}
          ></span>
        }
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
            onClick={() => {
              setSlideIndex(nextSlide())
            }}
          ></span>
        }
      >
        <FontAwesomeIcon
          icon={faWindowClose}
          onClick={() => {
            setOpenSlideShow(false)
            setSlideIndex(0)
          }}
          className="closeShow"
        />
        {renderPhotoSlides(photos)}
      </Carousel>
    )
  }

  const renderGallery = photos => {
    return photos.nodes.map((node, i) => {
      return (
        <div
          className="img-wrapper"
          onClick={() => {
            setSlideIndex(i + 1)
            setOpenSlideShow(true)
          }}
          key={i}
        >
          <FluidImage node={node} />
        </div>
      )
    })
  }

  return (
    <div className="gallery-page">
      <Nav />
      {openSlideShow ? renderSlideShow() : null}
      <main className="gallery">{renderGallery(photos)}</main>
    </div>
  )
}

export const query = graphql`
  query CityAndLifestylePhotosQuery {
    photos: allSanityCityandlifestyle(sort: { fields: name, order: ASC }) {
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
  }
`

export default CityAndLifestylePage
