const express = require('express');
const db = require('./database/index')
// const db = require('../database/index.js');
const bodyParser = require('body-parser');
const app = express();
// const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./client/dist'));

// app.use(express.urlencoded())
app.get('/sponsored', function (req, res) {
    // console.log(req.body)
    db.getAllProducts((err, shoes) => {
      if (err) { console.log(err); return; }
      res.send(shoes);
    });
  });
  
  app.listen(3333, function() {
    console.log('listening on port 3333!');
  });