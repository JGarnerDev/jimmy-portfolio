import React from "react"
import Img from "gatsby-image"

const FluidImage = ({ node }) => {
  return <Img fluid={node.photo.asset.fluid} />
}

export default FluidImage
