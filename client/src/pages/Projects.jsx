// Projects.jsx
// Projects page that fetches data from Express backend
import React from 'react'
import useFetch from '../hooks/useFetch'
import { getProjects } from '../services/projectsService'
import ProjectCard from '../components/cards/ProjectCard'

function Projects() {
  const { data: projects, loading, error } = useFetch(getProjects)

  if (loading) return <p>Loading projects...</p>
  if (error) return <p>Error loading projects: {error}</p>

  return (
    <main>
      <section>
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map(function(project) {
            return (<ProjectCard key={project.id} project={project} />)
          })}
        </div>
      </section>
    </main>
  )
}

export default Projects