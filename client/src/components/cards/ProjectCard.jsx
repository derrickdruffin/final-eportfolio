// ProjectCard.jsx
// Displays a single project with image, title, description and expand/collapse toggle
import React from 'react'
import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardMedia from '../ui/Card/CardMedia'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import Button from '../ui/Button'
import useToggle from '../../hooks/useToggle'
import { truncateText } from '../../utils/formatters'

function ProjectCard(props) {
  const project = props.project
  const [expanded, toggleExpanded] = useToggle(false)

  return (
    <Card className="project-card">
      {/* Only show image if one exists */}
      {project.image && (
        <CardMedia src={'/images/projects/' + project.image} alt={project.title + ' project'} />
      )}
      <CardHeader title={project.title} />
      <CardBody>
        <p>{expanded ? project.description : truncateText(project.description, 100)}</p>
      </CardBody>
      <CardFooter>
        <Button label={expanded ? 'Show Less' : 'Read More'} onClick={toggleExpanded} className="btn-primary" />
      </CardFooter>
    </Card>
  )
}

export default ProjectCard