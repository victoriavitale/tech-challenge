const User = require('../models/user');

//Methods to retrieve users data according to those defined in UserSchema Statics

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