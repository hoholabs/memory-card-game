import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Card from './Card';
import allImages from './images';

const cardImages = [
    <img src={allImages[0]} alt="Akai MPC2000"></img>,
    <img src={allImages[1]} alt="Akai S2000"></img>,
    <img src={allImages[2]} alt="Alesis 3630"></img>,
    <img src={allImages[3]} alt="MACHINEDRUM SPS-1"></img>,
    <img src={allImages[4]} alt="Korg EA-1"></img>,
    <img src={allImages[5]} alt="Korg ER-1"></img>,
    <img src={allImages[6]} alt="Linn LinnDrum"></img>,
    <img src={allImages[7]} alt="moog slimphatty"></img>,
    <img src={allImages[8]} alt="Roland TR808"></img>,
    <img src={allImages[9]} alt="Roland TR909"></img>,
    <img src={allImages[10]} alt="Yamaha FB-01"></img>,
    <img src={allImages[11]} alt="Yamaha Rm1x"></img>
];

function shuffle() {
    console.log('shuffle');
}

function CardTable(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let initialCards = cardImages.map((element) => {
            let card = {};
            card.title = element.props.alt;
            card.image = element;
            card.id = uuid();
            card.chosen = false;

            return card;
        });

        setCards(initialCards);
    }, []);

    return (
        <div>
            CardTable
            {cards.map((eachCard) => {
                return (
                    <Card
                        key={eachCard.id}
                        image={eachCard.image}
                        title={eachCard.title}
                        shuffle={shuffle}
                    />
                );
            })}
        </div>
    );
}

export default CardTable;
