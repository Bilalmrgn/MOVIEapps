import express from 'express';
var router = express.Router();
//create movie
var movieRouter = router.post('/movie', function (req, res, next) {
    var data = req.body;
    res.send(data);
});
export default movieRouter;
