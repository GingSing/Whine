const express = require('express')
const mongoose = require('mongoose')

const apiRouter = express.Router();
var db = mongoose.connection;

const getReviews = (req, res) => {
}

apiRouter.get('/:uid/reviews', getReviews);

module.exports = apiRouter;
