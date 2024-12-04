import React, { useRef } from "react";

const UseRefExample = (props) => {


    let {myName, age} = props
  let headingRef = useRef();

  

  let changeColor = () => {
    headingRef.current.style.color = "red";
  };
  return (
    <div>

        <h2>{myName}</h2>
      <h1 ref={headingRef}> this is useRef Example</h1>

      <button onClick={changeColor}> change color</button>

       {
        age > 10 && <h1> age is greater than 10</h1> 
       }
    </div>
  );
};

export default UseRefExample;
