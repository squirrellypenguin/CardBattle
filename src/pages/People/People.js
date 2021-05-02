import React, {
  useState,
  useEffect
} from 'react';
import {Route,Switch, Link} from 'react-router-dom';
import Person from './Person'
// import Battle from '../Battle/Battle'
import "../../App.css"
// 

const People = (props) => {
  // let people = props
// console.log(handleClick)
//   const [fight, setFight] =useState([{}]);
  
//   const oppponetGenerator = () => {
//     return Math.floor(Math.random() * (87 - 0) + 0);
// // console.log(core)

//   }
  // const handleClick = (input) => {
  //  let  player = input
  //  let  opponent = oppponetGenerator() 
  //  let battleArray = []
  //  battleArray.push(player)
  //  battleArray.push(people[opponent])
  //  console.log(battleArray)
  //   console.group(input)
  //     console.log(people[opponent])
  //     setFight(battleArray)

  // };

  // const addFighter = (value) => {
  //   // console.log(cart)
  //   setFighter([...fighter , value ])
  //   console.log(fighter)
  // };


  
  let person = 0;

  let thing = "";

   if (props !== null) {
    
    person = props.people.map(    
        (person, index) => {
          if (person.class == null) {
            //  console.log ("non mech")
            thing = person.species;
            thing = thing[0].toUpperCase() + thing.substring(1);
          } else { 
            //  console.log('mech')
            thing = person.class
          };
              
              let home = person.homeworld
              if (home !== undefined) {
              }

      return (
              <div className="small-container"  key={index} id={index}>                       
              <div className="span"> {person.name}</div>
              <div className="people-link">
              <img className="small-picture" src={person.image}/>
              </div>     
              <div className="people-info">
              <p>Home: {person.homeworld} <br />
              Standing: {person.height} <br/>Mass: {person.mass}<br />
              {thing}</p>
              <div className="people-button">
              <a href={person.wiki}> 
              <button>
              Details
              </button></a>
                 
             <button onClick={ () => props.handleClick(person)}>
                  Select
              </button>
              </div>
         </div>
   </div>
)
 }
 )
  }  

return      (
      <div className="container">
      
 {person}
 {/* <Person props={people} addFighter={addFighter}/> */}
 
      </div>
    );

}

export default People;