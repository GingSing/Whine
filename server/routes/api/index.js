const express = require('express')
const mongoose = require('mongoose')

const apiRouter = express.Router();
var db = mongoose.connection;

const Restaurant = require('../../models/postRestaurant');
const Item = require('../../models/postItem');

const getRestaurantReviews = (req, res) => {

}

const getItemReviews = (req, res) => {

}

const getRestaurantReview = (req, res) => {
  console.log(req.id);
}

const getItemReview = (req, res) => {

}

const reviewRestaurant = (req, res) => {
}

const reviewItem = (req, res) => {

}

apiRouter.get('/restaurant/reviews', getRestaurantReviews);
apiRouter.get('/restaurant/reviews/:id', getRestaurantReview);
apiRouter.get('/item/reviews/:id', getItemReview);
apiRouter.get('/item/reviews/:id', getItemReviews);

apiRouter.post('/restaurant/review', reviewRestauarant);
apiRouter.post('/item/review', reviewItem);

module.exports = apiRouter;
