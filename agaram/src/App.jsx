// import { Fragment } from "react"


// !  jsx , jsx expression , list and key , fragment

// const App = ()=>{

//   let myName = "abc"

//   let courses = ['java','js','python','html','css','react','node']
//   return(

//     <Fragment>

//        <h1 className=""> this is my first react app</h1>

//        <hr />

//        <h3> {myName} </h3>

//        {/* jsx expression */}

//        <h2>{2 + 3}</h2>

//        {/* list and key */}

//        {
//         courses.map((ele,index)=>(
//           <li key={index}> {ele} </li>
//         ))
//        }


     
    
//      <hr />
//     </Fragment>

   
//   )
// }

// export default App


// !  Component


// import React from 'react'
// import Addition, { Sub } from './components/Addition'

// const App = () => {
//   return (
//     <div>

//       <h1> app</h1>

//       <Addition/>
//       <hr />

//       <Sub/>
//     </div>
//   )
// }

// export default App




// !  props 


// import React from 'react'
// import Products from './components/Products'

// const App = () => {
   
//   return (
//     <>     
//        <Products 
//        productName= {"mobile"} 
//        price={23000}
//       brand ={"poco"}
//         />
       
      
//     </>
//   )
// }

// export default App




// ! conditions 


// import React from 'react'
// import Addition, { Sub } from './components/Addition';

// const App = () => {

//   let a = 10 ;
//   return(
//     <>
//      {
//        a>5 ? <h1> a is greater than 5</h1> : <h1> hi</h1>
//      }
//      <hr />

//      {
//       a>5 ? <Addition/> : <Sub/>
//      }
//      <hr />

//     {
//        a>5 && <Addition/>
//     }    
//     </>
//   )  
// }

// export default App



// !  event  and useState

// import React, { useState } from 'react'

// const App = () => {

//    let [num , SetNum] = useState(0)
//    let [sub, setSub] = useState("html")

//   let display =(e)=>{
//     console.log(e.target)
//     alert("hello .... ")
//   }

//   let a = 10
//   let increment =()=>{
//     a = a+1;                 //! it will not work
//     console.log(a)
//   }

//   let decrement =()=>{
//     SetNum(num-1)
//   }

//   let changeName =()=>{
//     setSub("css")
//   }
//   return (
//     <>
//     <button onClick={display}> click me</button>
//     <h2> {a}</h2>
//     <button onClick={increment}> increment</button>
//     <hr />
//      <h3> {num}</h3>
//      <button onClick={decrement}>decrement</button>
//      <h2>{sub}</h2>
//      <button onClick={changeName}>change Name</button>
//     </>
//   )
// }

// export default App



// ! useEffect 


import React, { useEffect, useState } from 'react'

const App = () => {

  let [count,setcount ]= useState(0)
  let [sub, setSub] = useState("html")

  // useEffect(()=>{
  //   console.log('i am useEffect')
  // })
  // useEffect(()=>{
  //   console.log('i am useEffect')
  // },[])
  
  useEffect(()=>{
    console.log('i am useEffect')
  },[sub])


  return (
    <>

      <h1> hello</h1>
      <h2> {count}</h2>

      <h2>{sub}</h2>

      <button onClick={()=>setcount(count+1)}>increment</button>
      <button onClick={()=> setSub("css")}>chnage name</button>
    
    </>
  )
}

export default App