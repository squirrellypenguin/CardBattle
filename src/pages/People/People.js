import React, {
  useState,
  useEffect
} from 'react';
import "../../App.css"
const People = ({people}) => {
console.log(people)
if (people !== null) {
console.log("here")}
else {console.log("not")}
let thing = ""
let person = 0

//   Putting in loading function to control render

  if (people !== null) {
      // console.log(pokes.results[0].name)
      // let pokeUrl = pokes.results[0].url
      // console.log(pokeUrl)
      person = people.map(   
          (person, index) => {
          console.log(index)
      
            if (person.class == null) {
             console.log ("non mech")
            thing = person.species
            thing = thing[0].toUpperCase() + thing.substring(1)
          } 
             else { 
               console.log('mech')
               thing = person.class
              };
              
              let home = person.homeworld
              if (home !== undefined) {
                console.log(home)
                // home = home[0].toUpperCase() + home.substring(1)
              }
              // home = home[0].toUpperCase() + home.substring(1)
      return (
              <div className="small-container"  key={index} id={index}>            
            
            
           
              <div className="span"> {person.name}</div>
              <div className="people-link">
                <img className="small-picture" src={person.image}/>
                
                
                
                <a href={person.wiki}> 
               
               <button>
                 Details
               </button></a>
              
               </div>     

              <div className="people-info">
                <p>Home: {person.homeworld} <br />
                Standing: {person.height} <br/>Mass: {person.mass}<br />
              {thing}</p>
              <div className="button">
           
              <button>
                Details
              </button>             </div>
         </div>
          
              {/* <button className="btn btn-lg btn-warning btn-block" key={index} onClick={handleClick({index})} value={index}>List</button> */}
           
              </div>
              )
      }
      )
  }  

return      (
      <div className="container">
      
 {person}
      </div>
    );

}

export default People;