const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:  {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    password:  {
        type:String,
        require: true
    },
    boards: Array
});

const UserModel = mongoose.model('User',UserSchema);

module.exports = UserModel;