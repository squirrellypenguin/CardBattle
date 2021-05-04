import React from 'react';
import "../../App.css"

const Battle = (props) => {
    
    console.log(props)
    const randomizer = () => {
        return Math.floor(Math.random() * (100 - 0) + 0);
 
    
      }

      
    console.log(props.fight)
    let fight = props.fight.map(
        (fight, index) => {
            console.log(fight.name)
            console.log(fight.image)        
        return (
            <div  key={index} id={index}>
                <img className="small-picture" src={fight.image}/>
                    <p>{fight.name}</p>
            </div>
     )
    }
   )


    let doBattle = () => {
        if ((props.fight[0].name === undefined)) {
            return alert('Pick a fighter from index')
         }
        console.log("Fight is on", props.fight[0].name)
        let player = randomizer() * (props.fight[0].mass * props.fight[0].height)
        let opponent = randomizer() * (props.fight[1].mass * props.fight[1].height)
        console.log(player)
        console.log(opponent)
        if (isNaN(player)) {
            player = randomizer() * (randomizer() / 5)
            console.log(player)
        } else if (isNaN(opponent)) {
            opponent = randomizer() * randomizer()
            console.log(opponent)
        }
        let winner = Math.max(player, opponent)
        if (winner === player){
            alert("You have won!!!")
            props.victory(1)
        } else {
            alert("Better luck next time!")
        }
    }




    if (isNaN(props.fight)){
    console.log("dfaert")
}




    return (
        <div>
              <h2>FIGHT!</h2>
                <div className="battle">
      
        {fight}
     
      <button onClick={doBattle}>Fight</button>
        </div>
</div>
    )
}

export default Battle;