import React from 'react'
import { useAirtel } from '../context/AirtelContext'

const Hello = () => {

   let {sim,type}=   useAirtel()
  return (
    <div>

        <h1> sim name is : {sim}</h1>
        <h2> the type of the sim is : {type}</h2>
    </div>
  )
}

export default Hello