const mongoose = require("mongoose");
const Schema = mongoose.Schema

// Global Games
const gameBankSchema = new Schema({
  // Game Data
  title: { type: String, required: true },
  description: String,
  amount: Number,
  penalty: String,
  expiration: { type: Date},
  
  // Players Data
  // Both 'user._id' - to allow search
  player1gamerTag: String,
  player2gamerTag: String,
  
  // Home Team - person who initates challenge
  homeTeamAccepts: { type: Boolean, default: false },
  // Away Team - person who accepts challenge
  awayTeamAccepts: { type: Boolean, default: false },
  
  // Winner
  winner: {type: String, default: "TBD" },
});





module.exports = mongoose.model("GameBank", gameBankSchema);