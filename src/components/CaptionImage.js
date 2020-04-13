import React from "react"
import Img from "gatsby-image"

const CaptionImage = ({className, image}) => (
  <figure className={className + " caption-image"}>
    <Img
      className="caption-image__image"
      key={image.Image.childImageSharp.fluid.originalName}
      fluid={image.Image.childImageSharp.fluid}
      alt={image.Image.childImageSharp.fluid.originalName}
    />
    <div className="caption-image__shadow">
      <figcaption className="caption-image__caption"><p>{image.Caption}</p></figcaption>
    </div>
  </figure>
)

export default CaptionImage
