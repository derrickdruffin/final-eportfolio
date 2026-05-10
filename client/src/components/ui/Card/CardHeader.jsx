import React from 'react'

function CardHeader(props) {
  return (
    <div className="card-header">
      <h3 className="card-title">{props.title}</h3>
      {props.subtitle && <p className="card-subtitle">{props.subtitle}</p>}
      {props.meta && <p className="card-meta">{props.meta}</p>}
    </div>
  )
}

export default CardHeader