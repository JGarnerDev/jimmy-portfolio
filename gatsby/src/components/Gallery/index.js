import React from "react"

import FluidImage from "../FluidImage"

const Gallery = ({ photos, photoClickHandler }) => {
  const renderGalleryPhotos = () =>
    photos.nodes.map((node, i) => (
      <div className="img-wrapper" key={i} onClick={() => photoClickHandler(i)}>
        <FluidImage node={node} />
      </div>
    ))
  return <main className="gallery">{renderGalleryPhotos()}</main>
}

export default Gallery
