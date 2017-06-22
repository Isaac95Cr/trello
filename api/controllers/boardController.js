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


const add = (req, res) => {
    const board = new Board(req.body);
    board.save()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'));
}

const update = (req, res) => {
    const { params, body } = req;
    Board.findById(params.id).exec()
        .then(data => Object.assign(data, body)
            .save()
            .then(data => sendJsonResponse(res, data, '200'))
            .catch(err => sendErrorResponse(res, err, '500'))
        )
        .catch(err => sendErrorResponse(res, err, '500'));
}

const del = (req, res) => {
    const { params, body } = req;
    Board.findById(params.id).exec()
        .then(data => data.remove()
            .then(data => sendJsonResponse(res, data, '200'))
            .catch(err => sendErrorResponse(res, err, '500'))
        ).catch(err => sendErrorResponse(res, err, '500'));
};

const get = (req, res) => {
    const { params, body } = req;
    Board.findOne({_id:params.id })
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
};

const getList = (req, res) => {
    const { params, body } = req;
    Board.find(params.id)
        .populate({
            path: 'lists',
            model: 'List',
            populate: {
                path: 'cards',
                model: 'Card'
            }
        })
        .exec()
        .then(data => sendJsonResponse(res, data, '200'))
        .catch(err => sendErrorResponse(res, err, '500'))
};

const Boards = {
    getAll,
    add,
    update,
    del,
    get
};

module.exports = Boards;