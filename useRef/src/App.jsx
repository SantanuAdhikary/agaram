import React from 'react'
import UseRefExample from './components/UseRefExample'
import AirtelProvider from './context/AirtelContext'
import Hello from './components/Hello'
import Hi from './components/Hi'

import './App.css'

const App = () => {
  return (
    <>
    

    <UseRefExample myName = {"surya"} age={60}/>


    <AirtelProvider>

       <Hello/>

        <Hi/>
    </AirtelProvider>

    <hr />
    
    </>
  )
}

export default App