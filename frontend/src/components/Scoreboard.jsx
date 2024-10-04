import React from 'react';

const Scoreboard = ({ gameData }) => {
  return (
    <div>
      <h2>Game History</h2>
      {gameData.map((data, index) => (
        <div key={index}>
          {data.player1} vs {data.player2}: {data.move1} vs {data.move2} - Result: {data.result === 1 ? 'Player 1 Wins' : data.result === 2 ? 'Player 2 Wins' : 'Tie'}
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
