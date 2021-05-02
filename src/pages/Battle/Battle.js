import React from 'react';

const Battle = (props) => {
        
    console.log(props)

    return (

        <div>
        <h2>FIGHT! <br />
        ROUND 1</h2>
        <p>{props[0]}</p>
        </div>

    )
}

export default Battle;