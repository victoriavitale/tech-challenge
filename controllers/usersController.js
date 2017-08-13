const User = require('../models/users');

class UsersController {
    getAll(req, res, next){
        User.findAll().then(data => {
            res.json(data);
        });
    }

    getOneById(req, res, next){
        let userId = req.params.id;
        User.findOneById(userId).then(data => {
            res.json(data);
        })
    }
}

module.exports = UsersController;