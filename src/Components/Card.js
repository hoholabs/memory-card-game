import React from 'react';

function Card(props) {
    return (
        <button onClick={props.shuffle}>
            {props.image}
            CARD{props.title}
        </button>
    );
}

export default Card;
