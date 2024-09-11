import express from 'express';
import verifyToken from './verifyToken.js'; // Middleware'i import ediyoruz
var router = express.Router();
router.get('/protected', verifyToken, function (req, res) {
    // Bu rota artık korumalı ve JWT doğrulanmış olacak
    res.json({
        message: 'This is a protected route',
        user: req.user // verifyToken middleware'inden gelen token'dan çözülen veriyi kullanıyoruz
    });
});
export default router;
