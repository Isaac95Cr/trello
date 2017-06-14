const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const { sendErrorResponse, sendJsonResponse, saveModel } = require('../apiUtils');

const getJWTMiddleware = (req, res, next) => {
    req.jwt_auth = false;
    if (req.headers['authorization'] &&
        req.headers['authorization'].startsWith('JWT')) {
        var jwt_token = req.headers['authorization'].substr(4);
        jwt.verify(jwt_token, process.env.JWT_PASS, function (err, jwt_data) {
            if (err)
                sendErrorResponse(res, err, '500');
            req.jwt_auth = jwt_data;
            next();
        });
    } else {
        sendErrorResponse(res, {
            error: true,
            message: 'Token required'
        }, '500');
    }
}

const authenticateMiddleware = (req, res, next) => {
    if (!req.jwt_auth) {
        sendErrorResponse(res, {
            error: true,
            message: 'Username required'
        }, '500');
    }
    const { _id } = req.jwt_auth.user;
    User.findOne({ _id }, (err, user) => {
        if (err) {
            sendErrorResponse(res, err, '500');
        }
        if (user) {
            req.user = user;
            next();
        } else {
            sendErrorResponse(res, {
                error: true,
                message: 'Username required'
            });
        }

    })
}

module.exports = {
    authenticateMiddleware,
    getJWTMiddleware
}