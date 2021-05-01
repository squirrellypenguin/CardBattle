import React, {useState, useEffect} from 'react';
import Planets from './Planets/Planets'
import Test from './Test'
import Ships from './Ships/Ships'

const Main = (props) => {

        //  
  
  // Set up up api call function 
  const url = 'https://akabab.github.io/starwars-api/api/all.json'
  const [people, setPeople] = useState(null)

  const getPeople = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPeople(data);
    // console.log(data)
  };

  const list = (people) => {
    for (const property in people){
        console.log(people[property].name)
        console.log(people[property].height)
        console.log(people[property].mass)
        console.log(people[property].homeworld)
        console.log(people[property].image)
        console.log(people[property].wiki)

      }
  }
  useEffect(() => {
     getPeople();
    
   }, []);
    return (

        <div>
        <h1>MAIN APP</h1>
        {/* <Planets /> */}
        <Test people={people}/>
        {/* <Ships /> */}
        </div>

    )
}

export default Main;