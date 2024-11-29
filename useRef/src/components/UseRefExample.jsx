import React, { useRef } from "react";

const UseRefExample = () => {
  let headingRef = useRef();

  let changeColor = () => {
    headingRef.current.style.color = "red";
  };
  return (
    <div>
      <h1 ref={headingRef}> this is useRef Example</h1>

      <button onClick={changeColor}> change color</button>
    </div>
  );
};

export default UseRefExample;
