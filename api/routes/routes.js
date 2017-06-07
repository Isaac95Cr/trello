const express = require('express');
const User = require('./../controllers/userController');

const routes = express.Router();

routes.get('/',(req,res) =>{
    res.send("hello world");
});
routes.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
});

routes.get('/users',User.getAll);

module.exports = routes;