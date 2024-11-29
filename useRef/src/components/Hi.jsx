import React from 'react'
import { useAirtel } from '../context/AirtelContext'

const Hi = () => {

 let {price} =  useAirtel()
  return (
    <div>

        <h1> this is hi component</h1>

        <h2> the price is : {price}</h2>
    </div>
  )
}

export default Hi