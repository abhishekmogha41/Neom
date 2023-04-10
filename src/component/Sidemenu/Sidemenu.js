import React from 'react'
import './Sidemenu.css'
import Card from '../Card/Card'

function Sidemenu() {
  const address = "Address"
  return (
    <div className='Sidemenu'>
      <h3>Azar Account Details</h3>
      <h4>{address}</h4>
      <Card Name ='Digital ID'
        data='9561313545'
      />
      <Card Name='Account ID'
        data = "51651206"
      />
      <Card Name="Account Type"
        data="Owner"
      />
      <Card Name="Account Status"
        data="Active"

      />
      <Card Name="Nationality"
        data="Indian"/>

<Card Name="Location"
        data="Riyad"/>
    </div>
  )
}

export default Sidemenu