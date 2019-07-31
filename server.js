const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/database.js");


const app = express();

app.use( express.static(__dirname + '../client/dist') );
app.use( bodyParser.json() );








app.listen(27017, () => {
    console.log('Listening on port 27017!');
})