import React from 'react'
import resumeData from '../data/resume.json'

function Resume() {
  const education = resumeData.education
  const experience = resumeData.experience
  const skills = resumeData.skills
  const awards = resumeData.awards

  return (
    <main>
      <section>
        <h2>Resume</h2>

        <section className="resume-section">
          <h3>Education</h3>
          <table>
            <thead>
              <tr>
                <th>Degree</th>
                <th>Institution</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {education.map(function(item) {
                return (
                  <tr key={item.id}>
                    <td>{item.degree}</td>
                    <td>{item.institution}</td>
                    <td>{item.year}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        <section className="resume-section">
          <h3>Work Experience</h3>
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Employer</th>
                <th>Dates</th>
              </tr>
            </thead>
            <tbody>
              {experience.map(function(item) {
                return (
                  <tr key={item.id}>
                    <td>{item.position}</td>
                    <td>{item.employer}</td>
                    <td>{item.dates}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <ul>
            {skills.map(function(skill, index) {
              return (<li key={index}>{skill}</li>)
            })}
          </ul>
        </section>

        <section className="resume-section">
          <h3>Extracurricular Activities &amp; Awards</h3>
          <table>
            <thead>
              <tr>
                <th>Award / Activity</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              {awards.map(function(item) {
                return (
                  <tr key={item.id}>
                    <td>{item.title}</td>
                    <td>{item.year}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </section>

      </section>
    </main>
  )
}

export default Resume