import React from 'react'

export default function Message(props) {
  return (
    <div>
    <h2>Name={props.name}</h2>
    <h2>Age={props.age}</h2>
    <h2>Maks={props.marks }</h2>
    </div>
  )
}