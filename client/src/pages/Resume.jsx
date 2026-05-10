// Resume.jsx
// Resume page that renders education, experience, skills and awards as ResumeCards

import React from 'react'
import resumeData from '../data/resume.json'
import ResumeCard from '../components/cards/ResumeCard'

function Resume() {
  return (
    <main>
      <section>
        <h2>Resume</h2>

        {/* Education section */}
        <section className="resume-section">
          <h3>Education</h3>
          <div className="cards-container">
            {resumeData.education.map(function(item) {
              return (<ResumeCard key={item.id} item={item} />)
            })}
          </div>
        </section>

        {/* Work Experience section */}
        <section className="resume-section">
          <h3>Work Experience</h3>
          <div className="cards-container">
            {resumeData.experience.map(function(item) {
              return (<ResumeCard key={item.id} item={item} />)
            })}
          </div>
        </section>

        {/* Skills section */}
        <section className="resume-section">
          <h3>Skills</h3>
          <div className="cards-container">
            {resumeData.skills.map(function(skill, index) {
              return (<ResumeCard key={index} item={{ title: skill }} />)
            })}
          </div>
        </section>

        {/* Awards section */}
        <section className="resume-section">
          <h3>Awards &amp; Activities</h3>
          <div className="cards-container">
            {resumeData.awards.map(function(item) {
              return (<ResumeCard key={item.id} item={item} />)
            })}
          </div>
        </section>

      </section>
    </main>
  )
}

export default Resume