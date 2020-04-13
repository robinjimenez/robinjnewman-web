import React from "react"
import Img from "gatsby-image"

const ProjectCover = ({ title, subtitle, cover }) => (
  <section className="section project-cover">
    <div className="project-detail__cover-text">
          <h1 className="project-detail__title">{title}</h1>
          <p
            className="project-detail__subtitle"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          ></p>
        </div>
        {cover ? (
          <Img
            key={`${title} cover`}
            className="project-detail__cover-image"
            fluid={cover.childImageSharp.fluid}
            style={{ position: "absolute" }}
            alt={`${title} cover image`}
          />
        ) : (<div className="cover-placeholder"></div>)}
  </section>
)

export default ProjectCover;