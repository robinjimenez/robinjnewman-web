import React, { Component } from "react"
import { Link } from "gatsby"
import { CSSTransition } from "react-transition-group"

import Logo from "./Logo"

class Header extends Component {
  state = {
    collapsed: true,
  }

  componentDidMount() {
    if (!this.props.isFixed) {
      this._handleScroll()
      window.addEventListener("scroll", this._handleScroll)
    }
  }

  componentWillUnmount() {
    if (!this.props.isFixed) {
      window.removeEventListener("scroll", this._handleScroll)
    }
  }

  _handleScroll = e => {
    if (this.state.collapsed && window.scrollY <= 5) {
      this.setState({ collapsed: !this.state.collapsed })
    } else if (!this.state.collapsed && window.scrollY >= 5) {
      this.setState({ collapsed: !this.state.collapsed })
    }
  }

  render() {
    const { isFixed, name } = this.props
    const fullName = name.split(" ")

    return (
      <header
        className={`header header--state-${
          isFixed || this.state.collapsed ? "collapsed" : "expanded"
        }`}
      >
        <p className="header__logo">
          <CSSTransition
            in={!this.state.collapsed}
            appear={!isFixed}
            timeout={1000}
            classNames="header__pre-logo-"
            unmountOnExit={true}
          >
            <span className="header__pre-logo">Hi! I'm </span>
          </CSSTransition>
          <Link id="site-title" to="/">
            {isFixed && (
              <CSSTransition
                classNames="back-arrow-"
                appear
                in
              >
                <span className="back-arrow" aria-label="back"></span>
              </CSSTransition>
            )}
            <Logo
              firstName={fullName[0]}
              firstSurname={fullName[1]}
              secondSurname={fullName[2]}
              collapsed={!isFixed && this.state.collapsed}
            />
          </Link>
        </p>
      </header>
    )
  }
}

export default Header
