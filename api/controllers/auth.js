require('dotenv').config();
const jwt = requiere('jsonwebtoken');

const generateToken = (user)=>{
    const u = {}
    return jwt.sing(u, process.env.DB_PASS, {
        expiresIn: 60*60
    });
}