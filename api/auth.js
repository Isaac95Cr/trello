require('dotenv').config();
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({
        user: user
    }, process.env.JWT_PASS, { expiresIn: 60 * 60 });
}

const verifyToken = (token, callback) => {
   return jwt.verify(token, process.env.JWT_PASS, callback);
}

module.exports = {
    generateToken,
    verifyToken
}; 