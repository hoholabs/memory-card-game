import React from 'react';

function ScoreBoard(props) {
    return (
        <div id="scoreBoard">
            <div>Score:{props.score}</div>
        </div>
    );
}

export default ScoreBoard;
