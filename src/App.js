import './App.css';
import {
  Route,
  Switch
} from 'react-router-dom';
import React, {
  useState,
  useEffect
} from 'react';



function App() {
  const [people, setPeople] = useState([])
  let data = ""
  const url = 'https://swapi.dev/api/people/'

  // Retrieves the count for the entries 
  const getCount = async () => {
    const response = await fetch(url)
    data = await response.json()
    console.log(data.count)
    console.log(...data.results)
    return (
      <h1>{data.count}</h1>
    )
  }

  const getPeople = async () => {
    const storage = []
    for (let i = 0; i < 5; i++) {
      let offset = i + 1
      const response = await fetch(`${url}${offset}`)
      let data = await response.json()
      storage.push(data)
      console.log(storage)
      // setPeople(...people, data)
      // const storage = [{}]
      // let foo = storage.push(data)
      // console.log(storage)
      // setPeople( [ ...data] )
      //  console.log(storage)
    }


    setPeople(storage)
    // setPeople( [...people, data] )
  }


  useEffect(() => {
    getCount();
    // getPeople();
  }, []);

  return ( <div className = "App" >
  <h1> Star Wars</h1>
    </div>
  );
}

export default App;