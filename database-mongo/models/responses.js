var db = require('../index.js');
var mongoose = require('mongoose');

// Responses schema

var responsesSchema = new Schema({
  fromNumber: Number,
  inBoundMsg: String,
  // createdAt: Timestamp,
});

var Responses = mongoose.model('Responses', responsesSchema);

module.exports = Responses;