// ResumeCard.jsx
// Displays a single resume entry with title, subtitle, dates and expandable bullets

import React from 'react'
import Card from '../ui/Card/Card'
import CardHeader from '../ui/Card/CardHeader'
import CardBody from '../ui/Card/CardBody'
import useToggle from '../../hooks/useToggle'
import Button from '../ui/Button'

function ResumeCard(props) {
  const item = props.item
  // useToggle controls whether bullet points are shown or hidden
  const [expanded, toggleExpanded] = useToggle(false)

  return (
    <Card className="resume-card">
      {/* Card header shows title, institution/employer and dates */}
      <CardHeader
        title={item.title || item.degree || item.position}
        subtitle={item.institution || item.employer || ''}
        meta={item.year || item.dates || ''}
      />
      <CardBody>
        {/* Show bullet points when expanded */}
        {item.bullets && expanded && (
          <ul>
            {item.bullets.map(function(bullet, index) {
              return (<li key={index}>{bullet}</li>)
            })}
          </ul>
        )}
        {/* Only show toggle button if bullets exist */}
        {item.bullets && <Button label={expanded ? 'Show Less' : 'Show More'} onClick={toggleExpanded} className="btn-secondary" />}
      </CardBody>
    </Card>
  )
}

export default ResumeCard