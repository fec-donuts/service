var mysql = require('mysql');
// var mysqlConfig = require('./config.js');


var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'shoes'
});


// var con = mysql.createConnection(mysqlConfig);

con.connect((err) => {
  if(err) console.log(err);
  console.log('connected')
});

var getAllProducts = function(callback) {
  con.query('SELECT * FROM shoes', (err, sponsored) =>{
    if (err) {
      callback(err, null);
      return;
    } else {
      callback(null, sponsored);
    }
  });
};



module.exports = {getAllProducts};