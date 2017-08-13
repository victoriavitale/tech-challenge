const express = require('express'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      routes = require('./routes'),
      userModel = require('./models/user');

const app = express();

//Settings for MongoDB connection
const mongoConnectionHost = '159.203.101.101',
      mongoConnectionPort = '27017',
      mongoDatabase = 'contacts-app';

//Connection to MongoDB database
mongoose.connect('mongodb://' + mongoConnectionHost + ':' + mongoConnectionPort + '/' + mongoDatabase);

app.use(cors());

app.use('/', routes);

app.listen(5000, function(){
    console.log("Server has started on port 5000")
})

