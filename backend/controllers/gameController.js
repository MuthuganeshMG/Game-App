const gameModel = require("../models/gameModel");
const Game = require("../models/gameModel");


exports.createLevel = async (req, res) => {
  const { player1, player2, move1, move2, result } = req.body;
  try {
    const newGame = await gameModel.create({
      player1,
      player2,
      move1,
      move2,
      result
    });
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json(error.message);
  }
};


exports.getLevel = async (req, res) => {
  try {
    const gameData = await gameModel.find({});
    res.status(200).json(gameData);
  } catch (error) {
    res.status(400).json(error.message);
  }
};