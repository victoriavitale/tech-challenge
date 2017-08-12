const User = require('../models/users');

class UsersController {
    constructor(){
        this._user = new User;
    }

    getAll(req, res, next){
        this._user.findAll(function(err, data){
            return data.toJSON();
        });
    }

    getOneById(req, res, next){

    }
}

module.exports = UsersController;