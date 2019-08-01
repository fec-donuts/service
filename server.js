const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/database.js");
const product = require('./dataCreater');



// console.log(product.product1)
// console.log(product.product2)
// console.log(product.product3)
// console.log(product.product4)
const app = express();

app.use( express.static(__dirname + '../client/dist') );
app.use( bodyParser.json() );








app.listen(3010, () => {
    console.log('Listening on port 3010!');
})