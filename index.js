const express = require('express'),
      mongoose = require('mongoose'),
      routes = require('./routes'),
      userModel = require('./models/users');

const app = express();

mongoose.connect('mongodb://localhost/contacts-app');

app.use('/', routes);

app.listen(3000, function(){
    console.log("Server has started on port 3000")
})

