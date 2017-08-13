const express = require('express'),
      UsersController = require('./controllers/usersController');
      
const router = express.Router();
const usersController = new UsersController;   

//Routes
router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getOneById);

module.exports = router;