import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Label = ({ className, children }) => {
  return <div className={`${className} label label--trans`}>{children}</div>
}

export const ProjectCard = ({ slug, title, subtitle, year, cover }) => {
  return [
    <Link key={`${slug}-card`} to={"/" + slug} className="projects__grid-card">
      <div  className="project-card__summary">
        <div className="project-card__summary-top">
          <Label className="project__year">{year}</Label>
        </div>
        <h3 className="project-card__title">{title}</h3>
        <div className="project-card__subtitle-container">
          <div className="project-card__presubtitle-line"></div>
          <p
            className="project-card__subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
        </div>
      </div>
      {cover &&
      <Img
        key={`${slug}-image`}
        className="project-card__thumb"
        fluid={cover.childImageSharp.fluid}
        alt={`${title} card cover`}
        style={{ position: "absolute" }}
      />}
    </Link>,
    <div key={`${slug}-card-shadow`} className="projects__grid-card-shadow"></div>,
  ]
}

export default ProjectCard
