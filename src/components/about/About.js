import React from "react"
import PropTypes from "prop-types"

import SkillTypeContainer from "./SkillTypeContainer"
import CollapsibleGroupContainer from "../CollapsibleGroupContainer"
import JobContainer from "./JobContainer"
import DegreeContainer from "./DegreeContainer"

const About = ({ skills, languagelevels, languages, experience, education }) => {
  return (
    <div className="about-layout">
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
          {languagelevels.map(level => (
            <li key={level.Name} className="languages__item">
              <span className="languages__level">{level.Name}</span>
              <strong className="languages__enum">
              -> {languages.find(group => group.fieldValue === level.Name).nodes.map(lang => lang.Name).join(", ")}
              </strong>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

About.propTypes = {
  skills: PropTypes.array.isRequired,
  languagelevels: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired,
}

export default About
