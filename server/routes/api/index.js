const express = require('express')
const mongoose = require('mongoose')

const creds = require('../../credentials')

const apiRouter = express.Router();
var connection = 'mongodb://' + creds.mLabUser + ':' + creds.mLabPassword + '@ds237932.mlab.com:37932/whine';
mongoose.connect(connection, { useNewUrlParser: true });
var db = mongoose.connection;

db.once('open', function(){
});

const getReviews = (req, res) => {

}

apiRouter.get('/:uid/reviews', getReviews);

module.exports = apiRouter;
