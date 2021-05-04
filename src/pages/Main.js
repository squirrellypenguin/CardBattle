import React, {useState, useEffect} from 'react';
import {Route,Switch, Link} from 'react-router-dom';

import Planets from './Planets/Planets'
import Battle from './Battle/Battle'
import Ships from './Ships/Ships'
import People from './People/People'
const Main = (props) => {

        //  
        const [counter, setCounter] = useState(0);
const victory = () => {
    setCounter(counter +1);
}
  // Set up up api call function 
  const url = 'https://akabab.github.io/starwars-api/api/all.json'
  const planetURL = 'https://swapi.dev/api/planets/'
  const [people, setPeople] = useState(null)
  const [planets, setPlanet] = useState([{}])
  const [fight, setFight] =useState([{}]);
  
  const oppponetGenerator = () => {
    return Math.floor(Math.random() * (87 - 0) + 0);
// console.log(core)

  }
  const getPlanet = async (planetURL) => {
    const response = await fetch(planetURL);
    const data = await response.json();
    console.log(data)
    setPlanet(data.results);
    // console.log(data)
  };

 


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
    getPlanet(planetURL);
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
    <div >    
        <Switch>
        <Route exact path='/'>
        <div className="spacer">
                <h2 className="reveal">Rebel's Guide to the Galaxy</h2>
        </div>
        <div className="home-buttons">
            <Link to="/people">
                <div className="button">
                    <p>People</p>
                </div>
            </Link>

            <Link to="/planets">
                <div className="button">
                    <p>Planets</p>
                </div>
            </Link>
</div>
            {/* <Link to="/battle">
                <div>
                    <p>Battle</p>
                </div>
            </Link> */}
        </Route>
       
        <Route path="/people/">
            <People people={people}  handleClick={handleClick}/>
        </Route>
        <Route path="/battle/">
            <Battle fight={fight}  victory={victory}  /> 
            </Route>
            <Route path="/planets/">
            <Planets planets={planets} /> 
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