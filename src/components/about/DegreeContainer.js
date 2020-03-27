import React from "react"

const DegreeContainer = ({ degree }) => {
  return (
    <div className="degree__block">
      <div className="degree__item">
        <div className="label degree__period">
          {degree.Period.Start + " -> " + degree.Period.End}
        </div>
        <h4 className="degree__title">{degree.Title}</h4>
        <p className="degree__school">{degree.School}</p>
        <p className="degree__GPA">GPA: {degree.GPA}</p>
        <p className="degree__description">
          <strong>Relevant subjects:</strong> {degree.Description}
        </p>
      </div>
    </div>
  )
}

export default DegreeContainer
