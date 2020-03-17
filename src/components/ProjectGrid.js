import React, { Component } from "react"
import PropTypes from "prop-types"

import Project from "./project"

class ProjectGrid extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
  }

  render() {
    const { projects } = this.props
    return (
      <div className="project-grid">
        {projects.map(project => {

          return (
            <div key={project.id} className="project-grid__item">
              <Project
                title={project.Title}
                subtitle={project.Subtitle}
                year={project.Year}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default ProjectGrid
