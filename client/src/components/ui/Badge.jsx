import React from 'react'

function Badge(props) {
  return (<span className={'badge ' + (props.className || '')}>{props.label}</span>)
}

export default Badge