import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"

const ContactContainer = () => {

  return (
    <section className="section contact">
      <div className="section__container section--bordered">
        <h2 className="section__title">Get in touch</h2>
        <div className="contact-email">
          <p className="contact-paragraph">Email me at</p>
          <a className="button button--secondary contact-email__link" href="mailto:hello@robinjnewman.com">hello@robinjnewman.com</a>
        </div>
        <div className="contact-social">
          <p className="contact-paragraph">or find me on</p>
          <a className="social-link" href="https://www.github.com/robinjimenez" aria-label="GitHub" rel="nofollow"><FontAwesomeIcon icon={faGithub} /></a>
          <a className="social-link" href="https://www.linkedin.com/in/robinjimenez" aria-label="LinkedIn" rel="nofollow"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </section>
  )
}

export default ContactContainer