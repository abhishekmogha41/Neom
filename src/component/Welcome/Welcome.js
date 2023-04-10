
import React from 'react'
import './Welcome.css'

function Weclome() {
    const name='Azar Muhammed'
    const time="25-02-2023 14:15:05 [UTC +3:00]"
  return (
    <div className='welcome_note'>Weclome <b>{name}</b>. Your last logged in Time: {time}</div>
  )
}

export default Weclome