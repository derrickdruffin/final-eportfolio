// About.jsx
// About page that renders biography paragraphs as individual AboutCards

import React from 'react'
import aboutData from '../data/about.json'
import AboutCard from '../components/cards/AboutCard'

function About() {
  return (
    <main>
      <section>
        <h2>About Me</h2>
        {/* Render each biography paragraph as a separate card */}
        <div className="about-container">
          {aboutData.bio.map(function(paragraph, index) {
            return (<AboutCard key={index} text={paragraph} />)
          })}
        </div>
        {/* LinkedIn link loaded from JSON */}
        <p>Connect with me professionally: <a href={aboutData.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
      </section>
    </main>
  )
}

export default About