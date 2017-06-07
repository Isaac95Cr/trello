const mongoose = require('mongoose');
const User = mongoose.model('User');

const getAll = (req, res)=>{
    User.find().exec((err,data)=>res.json(data));
};

const Users = {
    getAll
};

module.exports = Users;