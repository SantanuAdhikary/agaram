import React from 'react'
import UseRefExample from './components/UseRefExample'
import AirtelProvider from './context/AirtelContext'
import Hello from './components/Hello'
import Hi from './components/Hi'

const App = () => {
  return (
    <>
    

    <UseRefExample/>


    <AirtelProvider>

       <Hello/>

        <Hi/>
    </AirtelProvider>

    <hr />
    
    </>
  )
}

export default App