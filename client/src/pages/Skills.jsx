// Skills.jsx
// Skills page that renders each skill group as a card with tags

import React from 'react'
import skillsData from '../data/skills.json'
import Card from '../components/ui/Card/Card'
import CardHeader from '../components/ui/Card/CardHeader'
import CardBody from '../components/ui/Card/CardBody'
import Tag from '../components/ui/Tag'

function Skills() {
  return (
    <main>
      <section>
        <h2>Marketable Skills &amp; Abilities</h2>
        {/* Render each skill group as a card with tags */}
        <div className="cards-container">
          {skillsData.map(function(group) {
            return (
              <Card key={group.id} className="resume-card">
                <CardHeader title={group.title} />
                <CardBody>
                  {/* Render each skill as a tag */}
                  <div>
                    {group.skills.map(function(skill, index) {
                      return (<Tag key={index} label={skill} />)
                    })}
                  </div>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Skills