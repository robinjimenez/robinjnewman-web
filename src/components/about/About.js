import React from "react"
import PropTypes from "prop-types"


const About = ({ intro, skills, languages, experience, education }) => {
  return (
    <div className="about-layout">
      <section className="about__intro-section">
        <div
          className="about__intro"
          dangerouslySetInnerHTML={{ __html: intro }}
        />
      </section>
      <section className="about__skills-section">
        <h3 className="about-section__title">Hard Skills</h3>
      </section>
      <section className="about__experience-section">
        <h3 className="about-section__title">Experience</h3>
      </section>
      <section className="about__education-section">
        <h3 className="about-section__title">Education</h3>
      </section>
    </div>
  )
}

About.propTypes = {
  intro: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
  education: PropTypes.array.isRequired
}

export default About
