import React from "react"

const Skill = ({ skill }) => {
  return (
    <li className="skill-item">
      <h5 className="skill-item__name">->   {skill.Name}</h5>
      {skill.Description && <p className="skill-item__description">{skill.Description}</p>}
    </li>
  )
}

const SkillTypeContainer = ({ skillType }) => {
  return (
    <ul className="skill-type__block">
        {skillType.skills.sort((a,b) => a.Position > b.Position).map(skill => {
          return <Skill key={skill.Name} skill={skill} />
        })}
    </ul>
  )
}

export default SkillTypeContainer
