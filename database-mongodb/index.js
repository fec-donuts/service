const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
  if (err) throw err;
  console.log('Connected');
 });

const customerReview = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        firstName:{
            type: String,
            require: true
        },
        lastName: String
    },
    brand: String,
    item: String,
    rating:{stars: 5,
    review: String,
        created:{
            type: Date,
            default: Date.now
        }
    }
});

module.exports = mongoose.model('RateAndReview', customerReview)