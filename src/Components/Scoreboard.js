import React, { useState, useEffect } from 'react';

function ScoreBoard(props) {
    // const { score } = this.props;

    const [highScore, setHighScore] = useState('0');

    useEffect(() => {
        if (highScore < props.score) {
            setHighScore(props.score);
        }
    }, [highScore, props.score]);

    return (
        <div id="scoreBoard">
            <div>Score:{props.score}</div>
            <div>High Score:{highScore}</div>
        </div>
    );
}

export default ScoreBoard;
