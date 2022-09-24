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

    useEffect(() => {
        if (props.score === 12) {
            alert('you win');
        }
    }, [props.score]);

    function cardClicked(id) {
        checkLose(id);

        let newCards = cards.map((card) => {
            if (card.id === id) {
                card.chosen = true;
                console.log(card);
                return card;
            } else {
                return card;
            }
        });

        setCards(newCards);
        props.setScore(props.score + 1);
        shuffle();
    }

    function checkLose(id) {
        cards.map((card) => {
            if (card.id === id && card.chosen) {
                alert('you lose');
            }
            return null;
        });
    }

    function shuffle() {
        let shuffledCards = [];

        let newCards = cards.map((card) => {
            card.position = Math.floor(Math.random() * 12);
            return card;
        });

        for (let index = 0; index < newCards.length; index++) {
            const a = newCards[index];
            const b = newCards[index + 1];

            if (b === undefined) {
                shuffledCards.splice(a.position, 0, a);
            } else {
                a.position > b.position
                    ? shuffledCards.unshift(a)
                    : shuffledCards.push(a);
            }
        }

        setCards(shuffledCards);
    }

    return (
        <div id="cardTable">
            {cards.map((eachCard) => {
                return (
                    <Card
                        key={uuid()}
                        id={eachCard.id}
                        image={eachCard.image}
                        title={eachCard.title}
                        chosen={eachCard.chosen}
                        cardClicked={cardClicked}
                    />
                );
            })}
        </div>
    );
}

export default CardTable;
