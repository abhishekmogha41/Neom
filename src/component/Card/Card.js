import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <>
    <div className='main'>
        <div id='top'><h6>{props.Name}</h6></div>
        <div id='buttom'><h6>{props.data}</h6></div>
        </div>
    </>
  )
}

export default Card