// import React from 'react'
// import San from './components/San'
// import Hello from './components/Hello'

// const App = () => {

//   let a = 20

//   let subjects = ["html","css","react","node"]
//   return (
//     <div>

//        <h1 className='heading'> this is heading1</h1>

//        <h2> {a} </h2>

//        {
//           subjects.map((ele,index)=>(
//             <li key={index}> {ele} </li>
//           ))
//        }

     
//        <br />

//        <hr />


//        <San  myName = {"santanu"} age= {10} skills= {["js","react","node","express"]}/>

//        <hr />

//        <Hello/>

      
//     </div>
//   )
// }

// export default App




import React from 'react'
import UseStateExample from './components/UseStateExample'

const App = () => {
  return (
    <div>

      <UseStateExample/>
    </div>
  )
}

export default App