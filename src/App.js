import React, { useState } from 'react';
import './App.css';

import ScoreBoard from './Components/Scoreboard';
import CardTable from './Components/CardTable';

function App() {
    const [score, setScore] = useState(0);

    return (
        <div className="App">
            <ScoreBoard score={score} />
            <CardTable score={score} setScore={setScore} />
        </div>
    );
}

export default App;
