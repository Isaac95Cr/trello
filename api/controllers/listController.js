const mongoose = require('mongoose');
const List = mongoose.model('List');
const md5 = require('crypto-js/md5');
const jwt = require('jsonwebtoken');
const { sendErrorResponse, sendJsonResponse, saveModel } = require('../apiUtils');


const getAll = (req, res) => {
    List.find().exec()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
};

const add = (req,res) => {
    const list = new List(req.body);
    list.save()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
}

const update = (req,res) =>{
    const { params, body } = req;
    List.findById(params.id).exec()
    .then(data => Object.assign(data, body)
        .save()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
    )
    .catch(err => sendErrorResponse(res, err, '500'));  
}

const del = (req,res)=>{
    const { params, body } = req;
    List.findById(params.id).exec()
    .then(data => data.remove()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
    ).catch(err => sendErrorResponse(res, err, '500'));   
};



const Lists = {
    getAll,
    add,
    update,
    del
};

module.exports = Lists;