import React from 'react';


function Characters(props) {
    return (
        <div className='stars'>
        <h2>{props.char.name}</h2>
        <div>

        </div>
            <h3>Eye Color</h3>
                <p>{props.char.eye_color}</p>
            <h3>Hair Color</h3>
                <p>{props.char.hair_color}</p>
        </div>
    );
}

export default Characters;
