import React from "react"

export const Project = ({title,subtitle,year}) => {

    return (
      <div className="project">
        <p className="project__year">{year}</p>
        <h2 className="project__title">{title}</h2>
        <h3 className="project__subtitle">{subtitle}</h3>
      </div>
    )
}

export default Project