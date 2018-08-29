var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())
app.set('port', process.env.PORT || 3001);

app.get('/', function(req,res){

});

app.listen(app.get('port'));
