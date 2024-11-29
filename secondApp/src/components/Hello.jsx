import React from 'react'
import San from './San'

const Hello = () => {


    let a =22


    let print =()=>{
     
        alert("hellooooooo")
    }

  return (
    <div>
        <h1> this is hello component</h1>
     
         {
            a > 10? <h1> greater than 10</h1> : <h1> less than 10</h1>
         }

        <button onClick={print}>click me</button>

    </div>
  )
}

export default Hello