import React from 'react'

function CardMedia(props) {
  return (<div className="card-media"><img src={props.src} alt={props.alt || ''} className="card-image" /></div>)
}

export default CardMedia