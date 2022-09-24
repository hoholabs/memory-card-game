import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Card from './Card';

const cardImages = [
    <img src="Akai_MPC2000.jpeg" alt="Akai MPC2000"></img>,
    <img src="Akai_S2000.jpeg" alt="Akai S2000"></img>,
    <img src="Alesis_3630.jpeg" alt="Alesis 3630"></img>,
    <img src="elektron_MACHINEDRUM SPS-1.jpeg" alt="MACHINEDRUM SPS-1"></img>,
    <img src="Korg_EA-1.jpeg" alt="Korg EA-1"></img>,
    <img src="Korg_ER-1.jpeg" alt="Korg ER-1"></img>,
    <img src="Linn_LinnDrum.jpeg" alt="Linn LinnDrum"></img>,
    <img src="moog_slimphatty.jpeg" alt="moog slimphatty"></img>,
    <img src="Roland_TR808.jpeg" alt="Roland TR808"></img>,
    <img src="Roland_TR909.jpeg" alt="Roland TR909"></img>,
    <img src="Yamaha_FB-01.jpeg" alt="Yamaha FB-01"></img>,
    <img src="Yamaha_Rm1x.jpeg" alt="Yamaha Rm1x"></img>
];

function CardTable(props) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        let initialCards = cardImages.map((element) => {
            let card = {};
            card.title = element.props.alt;
            card.image = element.props.src;
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
                    />
                );
            })}
        </div>
    );
}

export default CardTable;
