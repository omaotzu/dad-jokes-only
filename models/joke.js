const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
  content: {type: String, required: true},
  categories: [{type: String, required: true}],
  rating: {type: Number},
  sfw: {type: String, required: true},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Joke', jokeSchema);
