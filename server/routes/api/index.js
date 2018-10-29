const express = require('express')
const mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
var config = require('../../config');

const apiRouter = express.Router();
var db = mongoose.connection;

const Restaurant = require('../../models/postRestaurant');
const Item = require('../../models/postItem');

const getReviews = (req, res) => {
  verifyToken(req.body.token, res, function(data){
    console.log("getting reviews");
    Promise.all([
      Restaurant.find(),
      Item.find()
    ])
    .then(results => {
      console.log("sending results");
      res.send(results[0].concat(results[1]).slice(0,11));
    })
    .catch(err => {
      console.log("Error");
    })
  });
}

const getItem = (req, res) => {

}

const getRestaurantReviews = (req, res) => {
  console.log("restaurants");
  Restaurant.find({}, function(err, restaurants){
    res.send(restaurants);
  });
}

const getItemReviews = (req, res) => {
  Item.find({}, function(err, items){
    res.send(items);
  });
}

const getRestaurantReview = (req, res) => {
  Restaurant.find({_id: req.params.id}, function(err, restaurant){
    res.send(restaurant);
  });
}

const getItemReview = (req, res) => {
  Item.find({_id:req.params.id}, function(err, item){
    res.send(item);
  });
}

const reviewRestaurant = (req, res) => {
  var newRestaurant = new Restaurant();

  console.log(req.body.name);
  newRestaurant.name = req.body.name;

  newRestaurant.save(function(err, restaurant){
    if(err){
      res.send('error');
    }else{
      res.send(restaurant);
    }
  });

}

const reviewItem = (req, res) => {

  var itemData = {
    postedBy: mongoose.Types.ObjectId(req.body.username),
    title: req.body.title,
    content: req.body.content,
    rating: req.body.rating,
    pictures: req.body.pictures,
    item: req.body.item
  }

  Item.create(itemData, function(err, item){
    if(err){
      res.send('error 404');
      console.log(err);
    }else{
      console.log(item);
      res.send(item);
    }
  });
}

  function verifyToken(token, res, callback){

    if(!token){
      res.status(401).send({ auth: false, message: 'No token provided.' });
    }else{
      console.log("verifying");
      jwt.verify(token, config.secret, function(err, decoded){
        if(err){
          res.status(500).send({ auth: false, message: 'Failed to authenicate token.' });
        }
        callback(decoded);
      })
    }

  }

apiRouter.get('/restaurant/reviews', getRestaurantReviews);
apiRouter.get('/restaurant/reviews/:id', getRestaurantReview);
apiRouter.get('/item/reviews/:id', getItemReview);
apiRouter.get('/item/reviews', getItemReviews);

apiRouter.post('/reviews', getReviews);

apiRouter.post('/restaurant/review', reviewRestaurant);
apiRouter.post('/item/review', reviewItem);

module.exports = apiRouter;
