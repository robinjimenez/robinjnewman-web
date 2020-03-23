import React, { Component } from "react"

class CollapsibleItem extends Component {
  state = {
    isCollapsed: this.props.isCollapsed
  }

  handleClick = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed })
  }

  render() {
    const content = this.props.content

    return (
      <div className={`collapsible-group__item collapsible-group__item--${
        this.state.isCollapsed ? "collapsed" : "expanded"
      }`}>
        <div className="collapsible-item__header">
          <h4 className="collapsible-item__title">{content.props.title}</h4>
          <button
            className={`collapsible-item__toggle collapsible-item__toggle--${
              this.state.isCollapsed ? "expand" : "collapse"
            }`}
            type="button"
            onClick={this.handleClick}
          >
            {this.state.isCollapsed ? "+" : "-"}
          </button>
        </div>
        {!this.state.isCollapsed && (
          <div className="collapsible-item__content">{content}</div>
        )}
      </div>
    )
  }
}

const CollapsibleGroupContainer = props => {
  const items = props.children

  return (
    <div className="collapsible-group">
      {items.map((item,index) => {
        return <CollapsibleItem key={item.key} content={item} isCollapsed={index > 0} />
      })}
    </div>
  )
}

export default CollapsibleGroupContainer
