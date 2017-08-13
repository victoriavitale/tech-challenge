const express = require('express'),
      router = express.Router(),
      usersController = require('./controllers/usersController');

const UsersController = new usersController;   

router.get('/users', UsersController.getAll);
router.get('/users/:id', UsersController.getOneById);

module.exports = router;