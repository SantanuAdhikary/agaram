import React from 'react'


const Products = (props) => {

    // console.log(props)

    let {price, brand, productName} = props
  return (
    <div>

        <h1>Product Name is : {productName}</h1>
        <h2>Brand is : {brand}</h2>
        <h3>Price is : {price}</h3>

        

       
    </div>
  )
}

export default Products