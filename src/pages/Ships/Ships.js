import React, {
    useState,
    useEffect
  } from 'react';

const Ships = (props) => {
    const [count, setCount] = useState(0);  
    const [ship, setShip] = useState(0);
    const urlPlanets = 'https://swapi.dev/api/starships/'
    const urlVehicles = 'https://swapi.dev/api/vehicles/'
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
    const getCount2 = async (urlVehicles) => {
        // let please = console.log(data)
        const response = await fetch(urlVehicles)
        let results = await response.json()
        console.log(results.count)
        console.log([...results.results])
        let   bar = Math.ceil(results.count/10)
        console.log(bar)
        console.log(count.please)
        setShip(bar)
        return (
          console.log("exit")
        )
      }

    useEffect(() => {
        getCount1(urlPlanets);
        getCount2(urlVehicles);
        
        // loopOfData(listOfData);
        // getPeople();
        
      }, []);
    return (

        <div>
        <h2> Ships - Total - {count} </h2>
        <h2> Vehicles - Total - {ship} </h2>

        </div>

    )
}

export default Ships;