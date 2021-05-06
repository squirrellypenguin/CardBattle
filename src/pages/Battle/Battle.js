import React from 'react';

const Battle = (props) => {
    
    const randomizer = () => {
        return Math.floor(Math.random() * (100 - 0) + 0);
    }
     
    let fight = props.fight.map(
        (fight, index) => {
            return (
        
                <div  key={index} id={index}>
                    <img className="small-picture" alt="profile-pic"src={fight.image}/>
                    <p className="battle-text">{fight.name}</p>
                </div>
            )
        }
    )

    let doBattle = () => {
        //Check for fighter
        if ((props.fight[0].name === undefined)) {
            return alert('Pick a fighter from index')
        }
        
        // Generate battle math
        let player = randomizer() * (props.fight[0].mass * props.fight[0].height)
        let opponent = randomizer() * (props.fight[1].mass * props.fight[1].height)
        
        //Deal with irregualr data
        if (isNaN(player)) {
            player = randomizer() * (randomizer() / 5)
            
        } else if (isNaN(opponent)) {
            opponent = randomizer() * randomizer()
            
        }
        let winner = Math.max(player, opponent)
        
        // Annouce results and lift state
        if (winner === player){
            alert("You have won!!!")
            props.victory(1)
        } else {
            alert("Better luck next time!")
        }
    }

    if (isNaN(props.fight)){
        console.log("_0v0_")
    }

    return (

        <div className="battle-background">
            <h2>FIGHT!</h2>
            <div className="battle">
            {fight}
                <br />
            </div>
            <button className="battle-button" onClick={doBattle}>Fight</button>
        </div>

    )
}

export default Battle;