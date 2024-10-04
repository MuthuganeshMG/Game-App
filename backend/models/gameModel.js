const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
  move1: { type: String, required: true },
  move2: { type: String, required: true },
  result: { type: Number, required: true },
});

module.exports = mongoose.model('Game', GameSchema);