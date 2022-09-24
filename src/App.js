import './App.css';
import ScoreBoard from './Components/Scoreboard';
import CardTable from './Components/CardTable';

function App() {
    return (
        <div className="App">
            <button>Shuffle</button>
            <ScoreBoard />
            <CardTable />
        </div>
    );
}

export default App;
