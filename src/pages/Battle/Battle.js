import React from 'react';
import "../../App.css"

const Battle = (props) => {
        
    console.log(props)
    let fight = props.fight.map(
        (fight, index) => {
            console.log(fight.name)
            console.log(fight.image)

            let pwr = fight.height * fight.mass
            if (isNaN(pwr)) {
                pwr = 1000
                console.log(pwr)
            } else {
                console.log(pwr)
            }
        
        return (
            <div  key={index} id={index}>
 <img className="small-picture" src={fight.image}/>
<p>{fight.name}</p>


            </div>
        )}
    )

    return (
        <div>
              <h2>FIGHT!</h2>
                <div className="battle">
      
        {fight}
        </div>
</div>
    )
}

export default Battle;