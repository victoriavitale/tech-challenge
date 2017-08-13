const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

//User model
const UserSchema = new Schema({
    _id: String,
    firstName: String,
    lastName: String,
    avatar: String,
    bio: String
})

//Functions to retrieve users data from MongoDB collection
UserSchema.statics = {
    findAll: function(){
        return this.find().exec();
    },
    findOneById: function(id){
        return this.findOne({'_id': id}).exec();
    }
};

module.exports = mongoose.model('User', UserSchema);
