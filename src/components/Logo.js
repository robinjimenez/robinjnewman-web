import React, { Component } from "react"
import { Transition } from "react-transition-group"

class Logo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: props.firstName,
      firstSurname: props.firstSurname,
      secondSurname: props.secondSurname,
    }
  }

  componentDidUpdate = prevProps => {
    if (!prevProps.collapsed && this.props.collapsed) {
      const surnameInitial = this.state.firstSurname.charAt(0)
      this.setState({
        firstSurname: surnameInitial,
      })
    } else if (prevProps.collapsed && !this.props.collapsed) {
      this.setState({
        firstSurname: this.props.firstSurname,
      })
    }
  }

  render() {
    return [
      <span key="first-name" className="logo-part first-name">
        {this.state.firstName}
      </span>,
      <span key="first-surname" className="logo-part first-surname">
        {this.state.firstSurname}
      </span>,
      <span key="second-surname" className="logo-part second-surname">
        {this.state.secondSurname}
      </span>
    ]
  }
}

export default Logo
