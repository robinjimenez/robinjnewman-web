import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import About from "./About"

const AboutContainer = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      strapiAbout {
        Introduction
      }
      allStrapiExperience {
        nodes {
          Title
          Description
          Company
          Period {
            End
            Start
          }
        }
      }
      allStrapiEducation {
        nodes {
          School
          Title
          GPA
          Description
          Period {
            End
            Start
          }
        }
      }
      allStrapiSkillType {
        nodes {
          id
          Name
          skills {
            Description
            Name
          }
        }
      }
      allStrapiLanguage {
        nodes {
          Level
          Name
        }
      }
    }
  `)

  return (
    <section className="section about">
      <h2 className="section__title">About me</h2>
      <About
        intro={data.strapiAbout.Introduction}
        skills={data.allStrapiSkillType.nodes}
        languages={data.allStrapiLanguage.nodes}
        experience={data.allStrapiExperience.nodes}
        education={data.allStrapiEducation.nodes}
      />
    </section>
  )
}

export default AboutContainer
