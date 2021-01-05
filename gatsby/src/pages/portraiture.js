import React, { useState } from "react"
import { graphql } from "gatsby"

import Nav from "../components/Nav"
import Gallery from "../components/Gallery"
import PhotoSlideShow from "../components/PhotoSlideshow"

import "../styles/global.scss"
import "../styles/gallery-page.scss"

const PortraiturePage = ({ data: { photos } }) => {
  const [openSlideShow, setOpenSlideShow] = useState(false)
  const [slideshowStartIndex, setSlideshowStartIndex] = useState(0)

  const photoClickHandler = i => {
    setSlideshowStartIndex(i + 1)
    setOpenSlideShow(true)
  }

  const closeSlideShow = () => {
    setOpenSlideShow(false)
  }

  return (
    <div className="gallery-page">
      <Nav />
      {openSlideShow ? (
        <PhotoSlideShow
          photos={photos}
          start={slideshowStartIndex}
          closeSlideShow={closeSlideShow}
        />
      ) : null}
      <Gallery photos={photos} photoClickHandler={photoClickHandler} />
    </div>
  )
}

export const query = graphql`
  query PortraiturePhotosQuery {
    photos: allSanityPortaiturePhoto(sort: { fields: name, order: ASC }) {
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

export default PortraiturePage
