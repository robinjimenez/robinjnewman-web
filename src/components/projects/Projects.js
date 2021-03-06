import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProjectGrid from "./ProjectGrid"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projects {
      allStrapiProject(sort: {order: DESC, fields: Year}) {
        nodes {
          slug
          Year
          Title
          Subtitle
          Cover {
            childImageSharp {
              fluid(fit: COVER) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="section projects">
      <div className="section__container section--bordered">
        <h2 className="section__title">Projects</h2>
        <ProjectGrid projects={data.allStrapiProject.nodes}></ProjectGrid>
      </div>
    </section>
  )
}

export default Projects