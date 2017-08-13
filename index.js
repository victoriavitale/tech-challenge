const express = require('express'),
      mongoose = require('mongoose'),
      routes = require('./routes'),
      userModel = require('./models/users'),
      cors = require('cors');
      
const app = express();

mongoose.connect('mongodb://localhost/contacts-app');

app.use(cors());
app.use('/', routes);

app.listen(5000, function(){
    console.log("Server has started on port 5000")
})

