import React from "react"

import ContactForm from "./ContactForm"

const ContactContainer = () => {

  return (
    <section className="section section--bordered contact">
      <h2 className="section__title">Get in touch</h2>
      <div className="contact-email">
        <p className="contact-paragraph">Email me at</p>
        <a className="secondary-button contact-email__link" href="mailto:hello@robinjnewman.com">hello@robinjnewman.com</a>
      </div>
    </section>
  )
}

export default ContactContainer