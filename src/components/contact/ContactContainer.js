import React from "react"

import ContactForm from "./ContactForm"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub, faDev } from "@fortawesome/free-brands-svg-icons"

const ContactContainer = () => {

  return (
    <section className="section section--bordered contact">
      <h2 className="section__title">Get in touch</h2>
      <div className="contact-email">
        <p className="contact-paragraph">Email me at</p>
        <a className="secondary-button contact-email__link" href="mailto:hello@robinjnewman.com">hello@robinjnewman.com</a>
      </div>
      <div className="contact-social">
        <p className="contact-paragraph">or find me on</p>
        <a className="social-link" href="https://www.github.com/robinjimenez" rel="nofollow"><FontAwesomeIcon icon={faGithub} /></a>
        <a className="social-link" href="https://www.linkedin.com/in/robinjimenez" rel="nofollow"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
    </section>
  )
}

export default ContactContainer