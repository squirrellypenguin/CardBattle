import React, {
    useState,
    useEffect
  } from 'react';


  const Person = (props) => {
console.log(props)

    return (

        <div>
 <h1>{props.name}</h1>
        </div>
    )
  }
  export default Person