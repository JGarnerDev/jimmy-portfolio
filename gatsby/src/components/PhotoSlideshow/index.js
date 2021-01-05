import React, { useState } from "react"

import Carousel from "react-bootstrap/Carousel"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWindowClose } from "@fortawesome/free-solid-svg-icons"

import FluidImage from "../FluidImage"

const PhotoSlideshow = ({ photos, start, closeSlideShow }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(start)

  const prevSlide = () => {
    if (activeSlideIndex <= 1) {
      return photos.nodes.length
    }
    return activeSlideIndex - 1
  }

  const nextSlide = () => {
    if (activeSlideIndex >= photos.nodes.length) {
      return 1
    }
    return activeSlideIndex + 1
  }

  const renderPhotoSlides = () =>
    photos.nodes.map((node, i) => (
      <Carousel.Item key={i}>
        <FluidImage node={node} />
      </Carousel.Item>
    ))

  const NextIcon = () => (
    <span
      aria-hidden="true"
      className="carousel-control-next-icon"
      onClick={() => {
        setActiveSlideIndex(nextSlide())
      }}
    ></span>
  )

  const PrevIcon = () => (
    <span
      aria-hidden="true"
      className="carousel-control-prev-icon"
      onClick={() => {
        setActiveSlideIndex(prevSlide())
      }}
    ></span>
  )

  const CloseIcon = () => (
    <FontAwesomeIcon
      icon={faWindowClose}
      onClick={() => closeSlideShow()}
      className="closeShow"
    />
  )

  return (
    <Carousel
      indicators={false}
      fade={true}
      activeIndex={activeSlideIndex}
      interval={null}
      touch={true}
      prevIcon={<PrevIcon />}
      nextIcon={<NextIcon />}
    >
      <CloseIcon />
      {renderPhotoSlides()}
    </Carousel>
  )
}

export default PhotoSlideshow
