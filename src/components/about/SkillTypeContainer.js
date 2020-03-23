import React from "react"

const Skill = ({ skill }) => {
  return (
    <li className={skill.Name}>
      <h5>{skill.Name}</h5>
      <p>{skill.Description}</p>
    </li>
  )
}

const SkillTypeContainer = ({ skillType }) => {
  return (
    <div className="skill-type__block">
      <ul>
        {skillType.skills.map(skill => {
          return <Skill key={skill.Name} skill={skill} />
        })}
      </ul>
    </div>
  )
}

export default SkillTypeContainer
