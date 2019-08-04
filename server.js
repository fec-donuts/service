const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/database.js");




const app = express();

app.use( bodyParser.json() );

app.use( express.static('./client/dist') );




app.get( '/grabItems', (req, res) => {
    db.getItems( (err, array) => {
        if (err) {
            console.error(err);
            res.status(404).end()
        }
        res.send(array);
    })
})




app.listen(3010, () => {
    console.log('Listening on port 3010!');
})