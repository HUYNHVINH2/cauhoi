const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    level:          String,
    ask     : String,
    A:{},
    B:{},
    C:{},
    D:{},
});
const userModel = mongoose.model('ask', UserSchema );
module.exports = userModel;


