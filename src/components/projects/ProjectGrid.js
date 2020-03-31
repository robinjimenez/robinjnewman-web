import React from "react"
import PropTypes from "prop-types"

import ProjectCard from "./ProjectCard"

const ProjectGrid = ({ projects }) => {
  return (
    <div className="projects__grid">
      {projects.map(project => {
        return (
          <div key={project.Slug} className="projects__grid-item">
            <ProjectCard
              slug={project.slug}
              title={project.Title}
              subtitle={project.Subtitle}
              year={project.Year}
              cover={project.Cover}
            />
          </div>
        )
      })}
    </div>
  )
}

ProjectGrid.propTypes = {
  projects: PropTypes.array.isRequired,
}

export default ProjectGrid
