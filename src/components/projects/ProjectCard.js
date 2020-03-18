import React from "react"
import Img from "gatsby-image"

const Label = ({ className, children }) => {
  return <div className={`${className} label label-trans`}>{children}</div>
}

export const ProjectCard = ({ id, title, subtitle, year, cover }) => {
  return [
    <div key={`${id}-summary`} className="project-card__summary">
      <div className="project-card__summary-top">
        <Label className="project__year">{year}</Label>
      </div>
      <h2 className="project-card__title">{title}</h2>
      <div className="project-card__subtitle-container">
        <div className="project-card__presubtitle-line"></div>
        <h3
          className="project-card__subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></h3>
      </div>
    </div>,
    <Img
      key={`${id}-image`}
      className="project-card__thumb"
      fluid={cover.childImageSharp.fluid}
      alt={`${title} card cover`}
      style={{ position: "absolute" }}
    />,
  ]
}

export default ProjectCard
