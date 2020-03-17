import React, { Component } from "react"
import { Link } from "gatsby"

import Logo from "./Logo"

class MovingHeader extends Component {
  state = {
    collapsed: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this._handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this._handleScroll)
  }

  _handleScroll = e => {
    if (
      (this.state.collapsed && window.scrollY <= 10) ||
      (!this.state.collapsed && window.scrollY >= 10)
    ) {
      this.setState({ collapsed: !this.state.collapsed })
    }
  }

  render() {
    const { name } = this.props;
    const fullName = name.split(" ");

    return (
      <header
        className={`header header--state-${
          this.state.collapsed ? "collapsed" : "expanded"
        }`}
      >
        <p className="header__logo">
          {!this.state.collapsed && (
            <span className="header__pre-logo">Hi! I'm </span>
          )}
          <Link id="site-title" to="/">
            <Logo
              firstName={fullName[0]}
              firstSurname={fullName[1]}
              secondSurname={fullName[2]}
              collapsed={this.state.collapsed}
            />
          </Link>
        </p>
      </header>
    )
  }
}

export default MovingHeader
