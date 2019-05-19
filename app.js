let express = require('express');
const AskColl = require('./ask');
const UserColl = require('./user');
const PlayerColl = require('./player');
// Initialize the app
let app = express();
// Setup server port
// app.set('views', './views');
// app.set('view engine', 'ejs');
app.use(express.static('./public'));
var port = process.env.PORT || 8080;
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//connect
const uri = 'mongodb://localhost:27017/cauHoi'
mongoose.connect(uri);
mongoose.connection.once('open', () => {
  app.listen(port, function () {
    console.log('working in ' + port);
  })
})
app.get('/',async(req, res) =>{
    let data = await UserColl.find();
    res.json(data);
   })
app.get('/getAsk',async(req, res) =>{
   let data = await AskColl.find();
   res.json(data);
  })
app.get('/player',async(req, res) =>{
    let data = await PlayerColl.find();
    res.json(data);
})