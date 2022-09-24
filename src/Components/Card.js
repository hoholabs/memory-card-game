import React from 'react';

function Card(props) {
    return (
        <button className="card" onClick={props.shuffle}>
            {props.image}
            {props.title}
        </button>
    );
}

export default Card;
