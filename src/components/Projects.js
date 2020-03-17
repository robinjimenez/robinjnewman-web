import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectGrid from "./ProjectGrid"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projects {
      allStrapiProject {
        nodes {
          id
          Subtitle
          Year
          Title
        }
      }
    }
  `)

  return (
    <section className="section section--bordered projects">
      <h2 className="section__title">Projects</h2>
      <ProjectGrid projects={data.allStrapiProject.nodes}></ProjectGrid>
    </section>
  )
}

export default Projects