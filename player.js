const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:          String,
    score     : Number,
  
});
const userModel = mongoose.model('player', UserSchema );
module.exports = userModel;


