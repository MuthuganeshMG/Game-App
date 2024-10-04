import React, { useState } from 'react';

const moves = ['stone', 'paper', 'scissors'];

const Game = ({ addGameData }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [move1, setMove1] = useState('');
  const [move2, setMove2] = useState('');
  const [score, setScore] = useState({ player1: 0, player2: 0 });

  const handleMove = async () => {
    if (!player1 || !player2 || !move1 || !move2) return;

    const result = calculateWinner(move1, move2);
    if (result) {
      const newScore = { ...score };
      if (result === 1) newScore.player1++;
      else if (result === 2) newScore.player2++;

      setScore(newScore);
      const gameData = { player1, player2, move1, move2, result };
      addGameData(gameData);
      
      // Using fetch to send POST request
      try {
        const response = await fetch('http://localhost:5000/api/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(gameData),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Game data saved:', data);
      } catch (error) {
        console.error('Error saving game data:', error);
      }
    }
  };

  const calculateWinner = (m1, m2) => {
    if (m1 === m2) return null; // Tie
    if ((m1 === 'stone' && m2 === 'scissors') || 
        (m1 === 'scissors' && m2 === 'paper') || 
        (m1 === 'paper' && m2 === 'stone')) {
      return 1; // Player 1 wins
    }
    return 2; // Player 2 wins
  };

  return (
    <div>
      <input
        placeholder="Player 1 Name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
      />
      <input
        placeholder="Player 2 Name"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
      />
      <select onChange={(e) => setMove1(e.target.value)} value={move1}>
        <option value="">Select Move</option>
        {moves.map(move => (
          <option key={move} value={move}>{move}</option>
        ))}
      </select>
      <select onChange={(e) => setMove2(e.target.value)} value={move2}>
        <option value="">Select Move</option>
        {moves.map(move => (
          <option key={move} value={move}>{move}</option>
        ))}
      </select>
      <button onClick={handleMove}>Play</button>
      <div>Score: Player 1: {score.player1} - Player 2: {score.player2}</div>
    </div>
  );
};

export default Game;
