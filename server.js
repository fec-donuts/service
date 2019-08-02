const express = require('express');
const bodyParser = require('body-parser');
const db = require("./database/database.js");




const app = express();

app.use( bodyParser.json() );

app.use( express.static('./client/dist') );




app.post( '/addItems', (req, res) => {
    // console.log(req.body)
    console.log(db)
    req.body.array.map( item => {
        db.addItems( item, (err, data) => {
            if (err) {
                console.error(err);
                res.status(404).end()
            }
        })
    })
    res.send('Items were added')
})




app.listen(3010, () => {
    console.log('Listening on port 3010!');
})