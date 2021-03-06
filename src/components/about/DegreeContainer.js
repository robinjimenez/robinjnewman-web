import React from "react"

const DegreeContainer = ({ degree }) => {
  return (
    <div className="degree__block">
      <div className="degree__item">
        <div className="label label--compact degree__period">
          {degree.Period.Start + " -> " + (degree.Period.End || "present")}
        </div>
        <h4 className="degree__title">{degree.Title}</h4>
        <p className="degree__school">{degree.School}</p>
        <p className="degree__description">
          <strong>Relevant subjects:</strong> {degree.Description}
        </p>
      </div>
    </div>
  )
}

export default DegreeContainer
