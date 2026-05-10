import React from 'react'
import projectsData from '../data/projects.json'

function Projects() {
  return (
    <main>
      <section>
        <h2>Projects</h2>
        <div className="projects-container">
          {projectsData.map(function(project) {
            return (
              <article key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <img src={'/images/projects/' + project.image} alt={project.title + ' project'} />
                <p>{project.description}</p>
              </article>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Projects