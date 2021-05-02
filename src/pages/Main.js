import React, {useState, useEffect} from 'react';
import {Route,Switch, Link} from 'react-router-dom';

import Planets from './Planets/Planets'
import Test from './Test'
import Ships from './Ships/Ships'
import People from './People/People'
const Main = (props) => {

        //  


  // Set up up api call function 
  const url = 'https://akabab.github.io/starwars-api/api/all.json'
  const [people, setPeople] = useState(null)

  const [fight, setFight] =useState([{}]);
  
  const oppponetGenerator = () => {
    return Math.floor(Math.random() * (87 - 0) + 0);
// console.log(core)

  }


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

   const handleClick = (input) => {
    let  player = input
    let  opponent = oppponetGenerator() 
    let battleArray = []
    battleArray.push(player)
    battleArray.push(people[opponent])
    console.log(battleArray)
     console.group(input)
       console.log(people[opponent])
       setFight(battleArray)
       console.log(fight)
 
   };


    return (
    <div>    
        <Switch>
        <Route exact path='/'>
        
                <h1>MAIN APP</h1>
        
            <Link to="/people">
                <div>
                    <p>peeps</p>
                </div>
            </Link>

            <Link to="/planets">
                <div>
                    <p>planets</p>
                </div>
            </Link>

            <Link to="/ships">
                <div>
                    <p>ships</p>
                </div>
            </Link>
        </Route>
       
        <Route path="/people/">
            <People people={people}  handleClick={handleClick}/>
        </Route>

        {/* <Route path="/planets/">
        <People people={Planets} />
        </Route> */}
{/* 
        <Route path="/ships/">
        <People people={ships} />
        </Route> */}


        </Switch>
    </div>

    )
}

export default Main;