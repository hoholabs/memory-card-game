import React from 'react';

export default function Card(props) {
    const clicked = props.chosen ? { style: { backgroundColor: 'white' } } : {};
    return (
        <button
            className="card"
            {...clicked}
            onClick={() => {
                props.cardClicked(props.id);
            }}
        >
            {props.image}
            {props.title}
        </button>
    );
}
