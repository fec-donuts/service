const pass = require('../sensitive.js');
const mysql = require('mysql');
 


const con = mysql.createConnection ({
  host: 'remotemysql.com',
  user: '1f3trUWSKC',
  password: `${pass.password}`,
  database: '1f3trUWSKC',
  port: 3306
});

con.connect( function (err) {
  if (err) {
      console.error('error connecting:' + err.stack);
    return;
  }
  console.log('Connected to MySql Database!');
});

const getItems = (callback) => {
  const queryString = `SELECT * FROM related;`;

  con.query(queryString, (err, array) => {
    if (err) {
      console.error(err);
    }
    callback(null, array);
  })
};



module.exports = {con, getItems};

