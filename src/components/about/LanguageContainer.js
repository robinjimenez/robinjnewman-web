import React from "react"

const Language = ({language}) => {
    return <div className="job__item">
        <div className="label job__period">{job.Period.Start + " -> " + job.Period.End}</div>
        <h4 className="job__title">{job.Title}</h4>
        <p className="job__company">{job.Company}</p>
        <p className="job__description">{job.Description}</p>
    </div>
}

const LanguageContainer = ({ language }) => {
  return (
    <div className="language__block">
      <Language language={language} />
    </div>
  )
}

export default LanguageContainer
