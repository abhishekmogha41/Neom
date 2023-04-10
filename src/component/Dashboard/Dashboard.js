import React from 'react'
import Left from './Left'
import Right from './Right'
import './Dashboard.css'

function Dashboard() {
  return (
    <>
        <div className='dashboard_main'>
            <Left/>
            <Right/>
        </div>
    </>
  )
}

export default Dashboard