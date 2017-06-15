const mongoose = require('mongoose');
Schema = mongoose.Schema;
require('./boardModel');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    boards: [{ type: Schema.ObjectId, ref: 'Board'}]
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;