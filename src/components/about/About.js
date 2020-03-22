import React from "react"
import PropTypes from "prop-types"


const About = ({ intro, skills, languages, experience, education }) => {
  return (
    <div className="about-layout">
      <section className="about__intro-section">
        <p
          className="about__intro"
          dangerouslySetInnerHTML={{ __html: intro }}
        ></p>
      </section>
      <section className="about__skills-section">
      </section>
      <section className="about__experience-section"></section>
      <section className="about__education-section"></section>
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
