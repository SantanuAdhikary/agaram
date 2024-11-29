import React, { useEffect, useState } from 'react'
import Use1 from './Use1';
import Use2 from './Use2';

const UseStateExample = () => {


    let [ number , setNumber]    =  useState(0)


    let [display , setDisplay] = useState(true)

    let [products, setProducts] = useState([])


  

    let increase =()=>{
       
      setNumber(number + 1)

    }


    let decrease =()=>{
        setNumber(number-1)
    }


    let change = ()=>{

        setDisplay(!display)
    }


    // useEffect(()=>{

    //     console.log('i am useEffect')
    // })



    let getData = async()=>{
        let res = await fetch("https://fakestoreapi.com/products")
        let data = await res.json()

        setProducts(data)
    }

    useEffect(()=>{

        document.title = ` the count is ${number}`

        console.log('i am useEffect')
    },)

    useEffect(()=>{
            getData()
    },[])

  return (
    <div>


        <h1> {number}</h1>


        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>

        <hr />


          {
             display ? <Use1/>  : <Use2/>
          }

        <button onClick={change}> 
            { display? "show2" : "show1"}
        </button>


        {
            products.map((ele)=>(
                <li key={ele.id}> {ele.title}</li>
            ))
        }
    </div>
  )
}

export default UseStateExample