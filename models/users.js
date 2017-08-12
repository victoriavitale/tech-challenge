'use strict';

const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const UserSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String
})

UserSchema.statics = {
    findAll: function(){
        return this.find().exec();
    },
    findOneById: function(id){
        return this.findOne({'_id': id}).exec();
    }
};

module.exports = mongoose.model('User', UserSchema);
