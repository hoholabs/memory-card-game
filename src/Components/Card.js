import React from 'react';

export default function Card(props) {
    //change 'white' to 'red' to see which ones you've already clicked
    const clicked = props.chosen ? { style: { backgroundColor: 'white' } } : {};
    return (
        <button
            className="card"
            {...clicked}
            onClick={(event) => {
                props.cardClicked(props.id);
            }}
        >
            {props.image}
            {props.title}
        </button>
    );
}
