const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 3002;
const app = express();

// Configuring the database
var dbConfig = require('./config/database.config.js');

/*Below two lines tells express to accept both JSON and url encoded value*/
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
 
app.use(cors())

var routes = require('./routes/workoutRoutes'); //importing route
routes(app); //register the route

// create application/json parser 
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false })


mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url);

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app running on port:", port);
  console.log("app running on host:", host);
})