const mongoose = require('mongoose');
const User = mongoose.model('User');
const md5 = require('crypto-js/md5');

const getAll = (req, res)=>{
    User.find().exec((err,data)=>res.json(data));
};

const signup = (req,res)=> {
    const body = req.body;
    const hash = md5(body.password.trim());
    const user = new User (Object.assign({}, body, {password: hash}))

    user.save((err,data) => {
        if(err){
            res.status(500);
            res.send(err);
        }else{
            res.status('201');
            res.json(data);
        }
    });
};

const signin = (req,res) => {
    const body = req.body;
    User.findOne({email: body.email},(err,user) => {
        /*if(err){
            res.status(500);
            res.send(err);
        }else{
            const hash = md5(body.password.trim());
            if(hash === user.password){
                res.status(500);
                res.send(err);
            }
            res.status('201');
            res.json(data);
        }*/
        res.status('201');
        res.json(user);
    })
};


const Users = {
    getAll,
    signup,
    signin
};

module.exports = Users;