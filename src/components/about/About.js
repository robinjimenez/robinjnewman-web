import React from "react"
import PropTypes from "prop-types"

import SkillTypeContainer from "./SkillTypeContainer"
import CollapsibleGroupContainer from "../CollapsibleGroupContainer"
import JobContainer from "./JobContainer"
import DegreeContainer from "./DegreeContainer"

const About = ({ intro, skills, languages, experience, education }) => {
  return (
    <div className="about-layout">
      <section className="about-section about-section--intro">
        <div
          className="about__intro"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </section>
      <section className="about-section about-section--skills">
        <h3 className="about-section__title">Skills</h3>
        <CollapsibleGroupContainer>
          {skills.map(type => (
            <SkillTypeContainer
              key={type.id}
              title={type.Name}
              skillType={type}
            />
          ))}
        </CollapsibleGroupContainer>
      </section>
      <section className="about-section about-section--experience">
        <h3 className="about-section__title">Experience</h3>
        {experience.map(job => (
          <JobContainer key={job.Title} job={job} />
        ))}
      </section>
      <section className="about-section about-section--education">
        <h3 className="about-section__title">Education</h3>
        {education.map(degree => (
          <DegreeContainer key={degree.Title} degree={degree} />
        ))}
      </section>
      <section className="about-section about-section--languages">
        <h3 className="about-section__title">Languages</h3>
        <ul className="languages__block">
          {languages.map(language => (
            <li className="languages__item"><strong>{language.Name}</strong> -> {language.Level}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

About.propTypes = {
  intro: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
}

export default About
