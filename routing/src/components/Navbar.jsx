import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>


       <ul>
        <Link to="/"> <li> home</li></Link> 
        <Link to="about"> <li> about</li></Link> 
        <Link to="contact"> <li> contact</li></Link> 
        
       </ul>

    </>
  )
}

export default Navbar