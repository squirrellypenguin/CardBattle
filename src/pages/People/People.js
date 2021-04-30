import React, {
    useState,
    useEffect
  } from 'react';

const People = (props) => {

    const [count, setCount] = useState(0);  
    const urlPlanets = 'https://swapi.dev/api/people/'
    // const getCount1 = async (urlPlanets) => {
    // let please = console.log(data)
    const getCount1 = async (urlPlanets) => {
      // let please = console.log(data)
      const response = await fetch(urlPlanets)
      let results = await response.json()
      console.log(results.count)
      console.log([...results.results])
      let   bar = Math.ceil(results.count/10)
      console.log(bar)
      console.log(count.please)
      setCount(bar)
      return (
        console.log("exit")
      )
    }

    useEffect(() => {
        getCount1(urlPlanets);
        // loopOfData(listOfData);
        // getPeople();
      }, []);
    return (

        <div>
        <h2> Persons - Total - {count} </h2>
        </div>

    )
}

export default People;