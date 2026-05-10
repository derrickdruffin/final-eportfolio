// AboutCard.jsx
// Displays a single biography paragraph with expand/collapse toggle

import React from 'react'
import Card from '../ui/Card/Card'
import CardBody from '../ui/Card/CardBody'
import CardFooter from '../ui/Card/CardFooter'
import useToggle from '../../hooks/useToggle'
import Button from '../ui/Button'
import { truncateText } from '../../utils/formatters'

function AboutCard(props) {
  // useToggle controls whether full text or truncated text is shown
  const [expanded, toggleExpanded] = useToggle(false)
  const text = props.text

  return (
    <Card className="about-card">
      <CardBody>
        {/* Show truncated or full text based on expanded state */}
        <p>{expanded ? text : truncateText(text, 150)}</p>
      </CardBody>
      <CardFooter>
        {/* Toggle button to expand or collapse text */}
        <Button label={expanded ? 'Show Less' : 'Read More'} onClick={toggleExpanded} className="btn-secondary" />
      </CardFooter>
    </Card>
  )
}

export default AboutCard