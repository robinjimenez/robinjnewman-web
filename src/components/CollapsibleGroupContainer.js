import React, { Component } from "react"

class CollapsibleItem extends Component {
  state = {
    isCollapsed: true,
  }

  handleClick = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    const content = this.props.content

    return (
      <div className="collapsible-group__item">
        <div className="collapsible-item__header">
          <h4 className="collapsible-item__title">{content.props.title}</h4>
          <button
            className="collapsible-item__toggle"
            type="button"
            onClick={this.handleClick}
          >
            +
          </button>
        </div>
        {this.state.isCollapsed && <div className="collapsible-item__content">{content}</div>}
      </div>
    )
  }
}

const CollapsibleGroupContainer = props => {
    const items = props.children

    return (
      <div className="collapsible-group">
        {items.map(item => {
          return <CollapsibleItem key={item.key} content={item} />
        })}
      </div>
    )
}

export default CollapsibleGroupContainer;