import React from 'react';

const People = (props) => {

  let person = 0;

  let thing = "";

  if (props.people !== null) {
    
    person = props.people.map(    
      
      (person, index) => {
        
        if (person.class == null) {
          
          //  Looks for fleshy things
            thing = person.species;
            thing = thing[0].toUpperCase() + thing.substring(1);
          
          } else { 
          
            //  Sets for non fleshy
            thing = person.class
          
          };
    
      return (
        
        <div className="small-container"  key={index} id={index}>                       
          <div className="span"> {person.name}</div>
            <div className="people-link">
              <img className="small-picture" alt="profile-pic" src={person.image}/>
            </div>     
              <div className="people-info">
              <p>Home: {person.homeworld} <br />
              Standing: {person.height} <br/>Mass: {person.mass}<br />
              {thing}</p>
              
              <div className="people-button">
                <button>
                <a href={person.wiki}>Details</a>
                </button>
           
                <button >
                <a onClick={ () => props.handleClick(person)} > Select </a>
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
   </div>
  
  )

}

export default People;