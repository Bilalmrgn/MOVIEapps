import jwt from 'jsonwebtoken';
import apiSecretKey from "../config";
var verifyToken = function (req, res, next) {
    var token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'no token provided' });
    }
    var tokenValue = token.split(' ')[1];
    jwt.verify(tokenValue, req.body.get(apiSecretKey.api_secret_key), function (err, decoded) {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token' });
        }
        req.user = decoded;
        next();
    });
};
export default verifyToken;
