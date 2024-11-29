

const San = (props)=>{

    // console.log(props)

    let {myName, age, skills} = props
    return (
        <div>

             <h1> this is San component</h1>

             <h2> {myName} </h2>

             <h3> {age}</h3>

              {
                 skills.map((ele,index)=>(
                    <li key={index}> {ele} </li>
                 ))
              }
        </div>
    )
}




export default San

