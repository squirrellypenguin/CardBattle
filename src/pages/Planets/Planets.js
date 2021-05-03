import React, {
    useState,
    useEffect
  } from 'react';
  import {Route,Switch} from 'react-router-dom';

const Planets = (props) => {
   
  const [planets, setPeople] = useState({});  
  const urlPlanets1 = 'https://swapi.dev/api/planets/'
  const urlPlanets2 = 'https://swapi.dev/api/planets/2'
  const urlPlanets3 = 'https://swapi.dev/api/planets/3'
  const urlPlanets4 = 'https://swapi.dev/api/planets/4'




    return (

        <div>
          <h1> HEre</h1>
        <h2> Planets - Total - </h2>
        </div>

    )
}

export default Planets;