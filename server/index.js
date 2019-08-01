const express = require('express');
const app = express();
const db = require('../database/index.js');
const bodyparser = require('body-parser');

app.use(bodyparser.json());

app.use(express.static("dist"));

app.post('/QandA', (req, res) => {
    console.log(req.body);
    db.savedAnswers = (error, cusAnswers) => {
        if(err){
            console.log(error, "error posting cusAnswers from server");
            res.end();
        };  
    };
    res.send(cusAnswers);
});

app.get('/QandA', (req, res) => {
    console.log(req.body);
    db.savedQuestion = (error, cusQuestion) => {
        if(error){
            console.log(error, "error getting cusQuestion from server");
            res.end();
        }
    };
    res.send(cusQuestion);
});

app.listen(3030, () => {
    console.log("listening on port 3030");
});