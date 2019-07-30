var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var sponsoredProducts = new Schema({
    image :  String, 
    name : String,
    description: String,
    shoeNum: Number
  });