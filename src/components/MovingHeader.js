import React, { Component } from "react"
import { Link } from "gatsby"

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
    const { name } = this.props

    return (
      <header className={`header header--state-${this.state.collapsed ? "collapsed" : "expanded"}`}>
        <span className="header__text">
          Hi! I'm <Link id="page-title" to="/">{name}</Link>
        </span>
      </header>
    )
  }
}

export default MovingHeader
