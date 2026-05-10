import React from 'react'
import skillsData from '../data/skills.json'

function Skills() {
  return (
    <main>
      <section>
        <h2>Marketable Skills &amp; Abilities</h2>
        <div className="skills-container">
          {skillsData.map(function(group) {
            return (
              <div key={group.id} className="skill-group">
                <h3>{group.title}</h3>
                <ul>
                  {group.skills.map(function(skill, index) {
                    return (<li key={index}>{skill}</li>)
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Skills