import React from "react"

const JobContainer = ({ job }) => {
  return (
    <div className="job__block">
      <div className="job__item">
        <div className="label label--compact job__period">
          {job.Period.Start + " -> " + (job.Period.End || "present")}
        </div>
        <h4 className="job__title">{job.Title}</h4>
        <p className="job__company">{job.Company}</p>
        <p className="job__description">{job.Description}</p>
      </div>
    </div>
  )
}

export default JobContainer
