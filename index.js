const express = require('express'),
      routes = require('./routes'),
      userModel = require('./models/users');

const app = express();

app.use('/', routes);

app.listen(3000, function(){
    console.log("Server has started on port 3000")
})

