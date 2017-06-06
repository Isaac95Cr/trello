const express = require('express');
const routes = express.Router();

routes.get('/',(req,res) =>{
    res.send("hello world");
});
routes.get('/holi',(req,res) =>{
    res.json({"holi": "holi"});
});

module.exports = routes;