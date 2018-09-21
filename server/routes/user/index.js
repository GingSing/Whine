const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/user');

const usersRouter = express.Router();
var db = mongoose.connection;

const logIn = (req, res) => {
  User.find({username: req.body.username, password: req.body.password}, function(err, user){
    if(err){
      res.send('error');
    }else{
      res.send('token');
    }
  })
}

const logOut = (req, res) => {
  console.log("logout");
}

const register = (req, res) => {
  if(req.body.email &&
    req.body.username &&
    req.body.name &&
    req.body.password &&
    req.body.passwordConf === req.body.password){

      var userData = {
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
      }

      User.create(userData, function(err, user) {
        if(err){
          return next(err);
        }else{
          return res.redirect('/');
        }
      });

  }
}

const getAll = (req, res) => {
  User.find({}, function(err, docs){
    if(docs.length === 0 || !docs){
      console.log("error");
    }
    console.log(docs);
  });
}

usersRouter.get('/login', logIn);
usersRouter.get('/logout', logOut);
usersRouter.get('/register', register);
usersRouter.get('/all', getAll);

module.exports = usersRouter;
