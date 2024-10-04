import React, { useState } from 'react';
import Game from './components/Game';
import Scoreboard from './components/Scoreboard';

function App() {
  const [gameData, setGameData] = useState([]);

  const addGameData = (data) => {
    setGameData([...gameData, data]);
  };

  return (
    <div>
      <h1>Stone Paper Scissors</h1>
      <Game addGameData={addGameData} />
      <Scoreboard gameData={gameData} />
    </div>
  );
}

export default App;
