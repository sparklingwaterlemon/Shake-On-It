const mongoose = require("mongoose");
const Schema = mongoose.Schema



// User --- Game-List Schema
const gameListSchema = new Schema({
  // Game Data
  title: String,
  description: String,
  amount: Number,
  penalty: String,
  expiration: Date,

  // Players Data
  // Have both 'user._id' in this array to search
  playerId: Array,
  // Home Team - person who initates challenge
  homeTeamAccepts: Boolean,
  // Away Team - person who accepts challenge
  awayTeamAccepts: Boolean,
  
  // Winner 
  winner: String,  
});






// User --- Global-User Schema
const globalUserSchema = new Schema({
  // Google Data
  name: String,
  googleId: {
      type: String,
      required: true
  },
  email: String,
  avatar: String,

  // Gammer Tag
  gamerTag: {type: String,
    default: function(){
      return "Platypus_" + Math.floor(Math.random()*10000000)}},

  // Ranking Data
  friendRatingScore: { type: Number, default: 5 },
  gamesWon: { type: Number, default: 0 },
  gamesLost: { type: Number, default: 0 },

  // Able to search All Games.. do I need this in here??
  gameBank: [{ type: Schema.Types.ObjectId, ref: "GameBank" }],

  // Push Friends to User's own Friend-List
  friendId: { type: Array, default: [] },
  friendTag: { type: Array, default: [] },

  // Push Games to User's own Game-List
  gameList: [ gameListSchema ],
  
});




module.exports = mongoose.model('GlobalUser', globalUserSchema);












