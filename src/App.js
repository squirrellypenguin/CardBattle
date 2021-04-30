import './App.css';
import {Route,Switch} from 'react-router-dom';
import React, {
  useState,
  useEffect
} from 'react';
import Main from './pages/Main'


function App() {
  const [count, setCount] = useState({people: 0, planets:0})
  let results = ""
const url = 'https://swapi.dev/api/'
  let listOfData= ["people", "planets", 'starships', 'vehicles']
  const urlPeople = 'https://swapi.dev/api/people/'
 const urlShips = ''
 const urlPlanets = 'https://swapi.dev/api/planets/'

 const loopOfData = (listOfData) => {
   for (let i = 0; i < listOfData.length; i++){
     let fetchURL = url + listOfData[i]
    console.log(fetchURL)
    getCount(fetchURL, listOfData[i])
   }

 }
 const getCount1 = async (urlPlanets) => {
  // let please = console.log(data)
  const response = await fetch(urlPlanets)
  results = await response.json()
  console.log(results.count)
  console.log([...results.results])
  let   bar = Math.ceil(results.count/10)
  console.log(bar)
  console.log(count.please)
  setCount({count, people:bar })
  return (
    console.log("exit")
  )
}
  // Retrieves the count for the entries 
  const getCount = async (urlPeople) => {
    // let please = console.log(data)
    const response = await fetch(urlPeople)
    results = await response.json()
    console.log(results.count)
    console.log([...results.results])
    let   bar = Math.ceil(results.count/10)
    console.log(bar)
    // console.log(count.please)
    // setCount({...count[0],planets:bar })

  }


  const getCount3 = async (url, data) => {
    let please = console.log(data)
    const response = await fetch(url)
    results = await response.json()
    console.log(results.count)
    console.log([...results.results])
    let   bar = Math.ceil(results.count/10)
    console.log(bar)
    console.log(count.please)
    setCount({...count, people:bar })

  }


  // const getPeople = async () => {
  //   const storage = []
  //   for (let i = 0; i < 5; i++) {
  //     let offset = i + 1
  //     const response = await fetch(`${urlPeople}${offset}`)
  //     let data = await response.json()
  //     storage.push(data)
  //     console.log(storage)
      // setPeople(...people, data)
      // const storage = [{}]
      // let foo = storage.push(data)
      // console.log(storage)
      // setPeople( [ ...data] )
      //  console.log(storage)
    // }


// /    // setPeople( [...people, data] )
//   }

  // const foo = setPeople;
  // useEffect(() => {
  //   getCount(urlPeople);
  //   getCount1(urlPlanets);
  //   // loopOfData(listOfData);
  //   // getPeople();
  // }, []);

  return (
     <div className = "App" >
  <h1> Star Wars</h1>
  <Main />
    </div>
  );
}

export default App;