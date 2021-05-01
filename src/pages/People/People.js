import React, {
    useState,
    useEffect
  } from 'react';
import Person from "./Person"

const People = (props) => {
const data = [{}]
    // const [count, setCount] = useState(0);  
    const urlPlanets = 'https://akabab.github.io/starwars-api/api/all.json'
    // const getCount1 = async (urlPlanets) => {
    // let please = console.log(data)
    const getCount1 = async (urlPlanets) => {
      // let please = console.log(data)
      const response = await fetch(urlPlanets)
      const results = await response.json()
      console.log(results)
     
}
    //   let   bar = Math.ceil(results.count/10)
    //   console.log(bar)
    //   console.log(count.please)
    //   setCount(bar)
    // for (let i = 0; i < results.length; i++) {
    //     const player = results[i].name
    //     console.log(results[i].class)
    //     console.log(results[i].height)
    //     console.log(results[i].mass)
    //     console.log(results[i].homeworld)
    //     console.log(results[i].image)
   
      // return (
      //   // console.log("exit")
      // )
      //  }
    
    
    useEffect(() => {
        getCount1(urlPlanets);
        // loopOfData(listOfData);
        // getPeople();
      }, []);

      return (
        <div className="currencies">
      <h3> fool</h3>
   
        </div>
      );
}

export default People;