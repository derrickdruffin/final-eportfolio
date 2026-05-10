import React from 'react'

function Tag(props) {
  return (<span className={'tag ' + (props.className || '')}>{props.label}</span>)
}

export default Tag