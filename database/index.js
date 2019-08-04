const pg = require('pg');


const connectionString = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@127.0.0.1:5432/shopazonPhotos`;

const pgClient = new pg.Client(connectionString);

pgClient.connect( function (error) {
    if (error) {
        console.error(error)
        return;
    }
    console.log('Connected to Postgres Server!');
});


//const query = pgClient.query()---***to build queriers 

const getAllPhotos = (callback) => {
  const queryString = 'SELECT * FROM photos;';
  pgClient.query(queryString, (error, data) => {
    if (error) {
      console.log(error);
    }
    callback(null, data);
  });
};

// const getPhoto = (photo, callback) => {
//   const queryString = `SELECT * FROM Photos WHERE name='${photo}'`
//   db.query(queryString, (error, data) => {
//     if (error) {
//       console.log(error);
//     }
//     callback(null, data);
//   });
// };



module.exports = { getAllPhotos , pgClient };