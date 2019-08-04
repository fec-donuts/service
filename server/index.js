var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/index');
var axios = require('axios')

var app = express();

app.use( bodyParser.json() );


app.use(express.static( './client/dist'));


app.get('/ratings', function (req, res) {
    db.getAllRatings((err, data) => {
    if(err) {
      console.log(err)
      res.end()
    }
    res.send(data)
  })
});

app.post('/ratings', function (req, res){
     let body = req.body
    db.saveAllRatings(body, (err,data) => {
      if(err){
        console.log(err)
        res.end()
      }
      res.send(data)
    })
});

app.delete('/ratings', function (req, res) {

});


app.listen(4000, function() {
    console.log('Listening on port 4000')
})