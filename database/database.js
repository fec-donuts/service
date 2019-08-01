	
const mongoose = require('mongoose');
const pass = require('../sensitive.js');
 
mongoose.connect(`mongodb+srv://clln62:${pass.password}@relateditems-kerwt.mongodb.net/test?retryWrites=true&w=majority`, function (err) {
 
    if (err) {
        console.error(err);
    }
  
    console.log('Successfully connected to database!');
  
 });


 var shoeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        name: String,
        stars: Buffer,
        price: String,
        photo: Buffer
    },
});