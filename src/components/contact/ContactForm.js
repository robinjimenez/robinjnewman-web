import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      name: ''
    };
  }

  greetUser = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mbjkaqon"
        method="POST"
        className="contact__form"
      >
        <div className="contact-block contact-block--name">
          <label htmlFor="name" className="name-label" >Hi, I'm </label>
          <input type="text" name="name" id="contact-name" onBlur={this.greetUser} className="name-input" required/>
        </div>
        <div className="contact-block contact-block--email">
          <label htmlFor="email" className="email-label">and my email address is </label>
          <input type="email" name="email" id="contact-email" className="email-input" required/>
        </div>
        <div className="contact-block contact-block--message">
          {this.state.name !== '' && <p className="user-greeting" >Hey there, {this.state.name}!</p>}
          <label htmlFor="message" className="message-label">What's on your mind?</label>
          <textarea type="text" id="contact-message" className="message-input" />
        </div>
        
        <button className={`contact__submit contact__submit--${status === "SUCCESS" ? 'inactive' : 'active'}`} type="submit">{status === "SUCCESS" ? <p>Sent!</p> : 'Submit'}</button>
        
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}