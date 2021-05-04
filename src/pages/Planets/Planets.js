import React, {
    useState,
    useEffect
  } from 'react';
  import {Route,Switch} from 'react-router-dom';

const Planets = (props) => {
   

let planet = 0
planet = props.planets.map(
  (planet, index) => {
    console.log(planet.name)
return (
  <div className="color" key={index}>
 
   <ul>  Overview 
     <div className='card'>
     <li>Clime: {planet.climate} </li>
    {/* <li>Features: {planet.terrain}</li> */}
  <li>Diameter: {planet.diameter}</li>
<li>Orbit: {planet.orbital_period} | {planet.rotation_period}</li>
<li>Beings: {planet.population}</li>
</div>

</ul>
<embed className="embed" src={'https://starwars.fandom.com/wiki/'+ planet.name}  />
</div>
  )
  }
)

    return (

        <div>
     <h1> Planet Index</h1>
        {planet}
      
        </div>

    )
}

export default Planets;