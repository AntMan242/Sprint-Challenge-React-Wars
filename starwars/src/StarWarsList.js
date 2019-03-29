import React from 'react';
import Characters from './Character';



function StarWarsList(props) {
    return (
        <div className='container'>
            {props.starwarsChars.map((char) => {
                return <Characters char={char} />

            })
        }
        </div>
    )
}

export default StarWarsList;