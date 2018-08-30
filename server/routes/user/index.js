const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/user');

const usersRouter = express.Router();
var db = mongoose.connection;

const logIn = (req, res) => {
  console.log("hello");
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
          return res.send("hi");
        }
      });

  }
}

usersRouter.get('/login', logIn);
usersRouter.get('/register', register);

module.exports = usersRouter;
