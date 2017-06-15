const mongoose = require('mongoose');
const Board = mongoose.model('Board');
const md5 = require('crypto-js/md5');
const jwt = require('jsonwebtoken');
const { sendErrorResponse, sendJsonResponse, saveModel } = require('../apiUtils');


const getAll = (req, res) => {
    Board.find().exec()
    .then(data => sendJsonResponse(res, data, '200'))
    .catch(err => sendErrorResponse(res, err, '500'));
};


const Boards = {
    getAll,
};

module.exports = Boards;