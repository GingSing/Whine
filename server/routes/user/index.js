const express = require('express')
const mongoose = require('mongoose')
const User = require('../../models/user')
const bcrypt = require('bcryptjs')
var jwt = require('jsonwebtoken')
var config = require('../../config')

const usersRouter = express.Router();
var db = mongoose.connection;

const logIn = (req, res) => {
  User.find({username: req.body.username}, function(err, user){
    if(err){
      res.send(err);
    }else if(user.length > 0){
      user.map((data) => {
        if(bcrypt.compareSync(req.body.password, data.password)){

          var token = jwt.sign({ id: data.id }, config.secret, {
            expiresIn: 86400 //24 hours
          });

          res.status(200).send({ success: "successful", user: data.username, token: token });
          //change to return tokens
        }
      })
    }else{
      res.status(400).send({ error: "wrong password"});
    }
  })
};

const register = (req, res) => {
  if(!containsAll(req.body)){
    return res.status(422).json({ error: 'Missing Data'});
  }else if(!emailIsCorrect(req.body)){
    return res.status(422).json({ error: 'Email Incorrect'});
  }else if(!passwordConfirmed(req.body)){
    return res.status(422).json({ error: 'Password Not Confirmed'});
  }else{

    var salt = bcrypt.genSaltSync(10);

    var userData = {
      username: req.body.username,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, salt),
      email: req.body.email
    }

    User.create(userData, function(err, user) {
      if(err){
        return res.status(422).json({ error: 'Username Or Email Unavailable'});
      }else{
        console.log("registered");
        return res.status(200).json({ success: 'Successfully Registered'});
      }
    });
  }

  function containsAll(body){
    return (body.email !== "" && body.username !== "" && body.name !== "" && body.password !== "");
  }
  
  function emailIsCorrect(body){
    let email = body.email;
    let endsWithComOrCa = email.endsWith(".ca") || email.endsWith(".com");
    let containsAt = email.includes("@");
    return(endsWithComOrCa && containsAt && email.length < 65);
  }
  function passwordConfirmed(body){
    return body.passwordConf === body.password;
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

usersRouter.post('/login', logIn);
usersRouter.post('/register', register);
usersRouter.get('/all', getAll);

module.exports = usersRouter;
