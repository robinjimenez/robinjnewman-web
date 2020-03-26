import React, { Component } from "react"

const SubmitButton = props => {
  return (
    <button
      className={`primary-button contact__submit contact__submit--${props.isActive}`}
      type="submit"
    >
      <div className="primary-button__content">{props.text}</div>
    </button>
  )
}

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "",
      name: "",
      email: "",
      message: "",
    }
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => this.setState({ state: "SUCCESS!" }))
      .catch(() => this.setState({ state: "ERROR" }))

    e.preventDefault()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  greetUser = event => {
    this.setState({ name: event.target.value })
  }

  render() {
    const { status } = this.state
    return (
      <form
        name="contact"
        className="contact__form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-block contact-block--name">
          <label htmlFor="name" className="name-label">
            Hi, I'm{" "}
          </label>
          <input
            type="text"
            name="name"
            id="contact-name"
            onBlur={this.greetUser}
            className="name-input"
            required
          />
        </div>
        <div className="contact-block contact-block--email">
          <label htmlFor="email" className="email-label">
            and my email address is{" "}
          </label>
          <input
            type="email"
            name="email"
            id="contact-email"
            className="email-input"
            onChange={this.handleChange}
            required
          />
        </div>
        <input type="hidden" name="_subject" value="New message from website" />
        <div className="contact-block contact-block--message">
          {this.state.name !== "" && (
            <p className="user-greeting">Hey there, {this.state.name}!</p>
          )}
          <label htmlFor="message" className="message-label">
            What's on your mind?
          </label>
          <textarea
            type="text"
            id="contact-message"
            name="message"
            className="message-input"
            onChange={this.handleChange}
          />
        </div>

        <SubmitButton
          text={status === "SUCCESS" ? "Sent!" : "Submit"}
          isActive={status === "SUCCESS" ? "inactive" : "active"}
        />

        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    )
  }
}
