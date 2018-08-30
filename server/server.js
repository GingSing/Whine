var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var app = express()

const apiRoutes = require('./routes/api');

app.use(cors())
app.use('/api', apiRoutes);
app.set('port', process.env.PORT || 3001);

app.get('/', function(req,res){

});

app.listen(app.get('port'),(res,req) => {
  console.log("hi");
});
