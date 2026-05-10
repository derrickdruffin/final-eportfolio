import React from 'react'

function Button(props) {
  return (<button className={'btn ' + (props.className || '')} onClick={props.onClick} type={props.type || 'button'}>{props.label}</button>)
}

export default Button