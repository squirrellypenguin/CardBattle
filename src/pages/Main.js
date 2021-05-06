import React, { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Planets from './Planets/Planets'
import Battle from './Battle/Battle'
import People from './People/People'

const Main = () => {
    
    //State and counter for recording wins
    const [counter, setCounter] = useState(0);
    const victory = () => {
        setCounter(counter +1);
    }
    
    // Set up states and api urls 
    const url = 'https://akabab.github.io/starwars-api/api/all.json'
    const planetURL = 'https://swapi.dev/api/planets/'
    const [people, setPeople] = useState(null)
    const [planets, setPlanet] = useState([{}])
    const [fight, setFight] =useState([{}]);
  
    // Create index for opponent
    const oppponetGenerator = () => {
        return Math.floor(Math.random() * (87 - 0) + 0);
    }

    // Pull data from API and set state
    const getPlanet = async (planetURL) => {
        const response = await fetch(planetURL);
        const data = await response.json();
        setPlanet(data.results);
    }

    const getPeople = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPeople(data);
    }

//     const list = (people) => {
//     for (const property in people){
//         console.log(people[property].name)
//         console.log(people[property].height)
//         console.log(people[property].mass)
//         console.log(people[property].homeworld)
//         console.log(people[property].image)
//         console.log(people[property].wiki)

//       }
//   }

    // Set inital screen
    useEffect(() => {
        getPeople();
        getPlanet(planetURL);
   }, []);
    
   // Function to create fight state
   const handleClick = (input) => {
    let  player = input
    let  opponent = oppponetGenerator() 
    let battleArray = []
    battleArray.push(player)
    battleArray.push(people[opponent])
    setFight(battleArray)
   }


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
        
            </Switch>
    </div>

)
}

export default Main;