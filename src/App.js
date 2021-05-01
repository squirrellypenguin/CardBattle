import './App.css';
import {Route,Switch} from 'react-router-dom';
import React, {
  useState,
  useEffect
} from 'react';
import Main from './pages/Main'


function App() {
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