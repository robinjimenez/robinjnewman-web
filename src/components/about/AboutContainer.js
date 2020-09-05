import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import About from "./About"

const AboutContainer = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      strapiAbout {
        Introduction
      }
      allStrapiExperience(sort: { fields: Period___Start, order: DESC }) {
        nodes {
          Title
          Description
          Company
          Period {
            End(formatString: "MMM YYYY")
            Start(formatString: "MMM YYYY")
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
            End(formatString: "MMM YYYY")
            Start(formatString: "MMM YYYY")
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
      allStrapiLanguageLevel(sort: { fields: Order, order: ASC }) {
        nodes {
          Name
        }
      }
      allStrapiLanguage {
        group(field: Level___Name) {
          fieldValue
          nodes {
            Name
          }
        }
      }
    }
  `)

  return (
    <section className="section about">
      <div className="section__container">
        <h2 className="section__title">- About me -</h2>
        <section className="about-section about-section--intro">
          <div
            className="about__intro"
            dangerouslySetInnerHTML={{ __html: data.strapiAbout.Introduction }}
          />
        </section>
        <About
          skills={data.allStrapiSkillType.nodes}
          languagelevels={data.allStrapiLanguageLevel.nodes}
          languages={data.allStrapiLanguage.group}
          experience={data.allStrapiExperience.nodes}
          education={data.allStrapiEducation.nodes}
        />
      </div>
    </section>
  )
}

export default AboutContainer
