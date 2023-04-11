import React from 'react'
import '../../App.css'
import { Link,Outlet } from 'react-router-dom'

function Left() {
  
  return (
    <>
    <div >
        <Link to='/DashboardCard'> <h6 className='left_comp'>Recently Uploaded Document</h6></Link>
<Outlet/>
</div>
      
    </>
  )
}

export default Left