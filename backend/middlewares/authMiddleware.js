const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

function authMiddleware(req, res, next) {
    console.log('authenticating')
    let authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({});
    }

    console.log(authHeader)
    const token = authHeader.split(" ")[1];
    console.log(token)

    try{
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;

        next()
    }catch(e){
        return res.status(403).json({});
    }
}

module.exports = authMiddleware