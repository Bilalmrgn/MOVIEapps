import jwt from 'jsonwebtoken';
import apiSecretKey from "../config.js";
var verifyToken = function (req, res, next) {
    var token = req.headers['x-access-token'] || req.body.token || req.query.token;
    if (!token) {
        res.json({
            status: false,
            message: 'no token provided'
        });
    }
    jwt.verify(token, apiSecretKey.api_secret_key, function (err, decode) {
        if (err) {
            res.json({
                status: false,
                message: 'Failed to authenticate token'
            });
        }
        else {
            req.decode = decode;
            next();
        }
    });
};
export default verifyToken;
