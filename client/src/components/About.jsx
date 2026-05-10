import React from 'react'
import aboutData from '../data/about.json'

function About() {
  return (
    <main>
      <article>
        <h2>About Me</h2>
        {aboutData.bio.map(function(paragraph, index) {
          return (<p key={index}>{paragraph}</p>)
        })}
        <p>Connect with me professionally: <a href={aboutData.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></p>
      </article>
    </main>
  )
}

export default About