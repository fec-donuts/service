const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'QandA'
});

con.connect((error) => {
  if(error) throw error;
    console.log('connected');
    con.query('CREATE DATABASE QandA', (error, result) => {
        if(error) throw error;
        console.log("Database created");
    });
});

const savedQuestion = (cusQuestion, callback) => {
    const queryString = `INSERT INTO Questions (question) values question='${question}';`
    con.query(queryString, (error, cusQuestion) => {
        if(error){ 
            console.log(error, "error inserting question on database")
        };
        callback(null, cusQuestion);
    });
};

const savedAnswers = (cusAnswers, callback) => {
    const queryString = `INSERT INTO Answers (answer) values answer='${answer}';`
    con.query(queryString, (error, cusAnswers) => {
        if(error){
            console.log(error, "error inserting answer on database")
        };
        callback(null, cusAnswers);
    })
}

module.exports.savedQuestion = savedQuestion;
module.exports.savedAnswers = savedAnswers;