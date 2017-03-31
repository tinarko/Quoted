var db = require('../index.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema

// Responses schema

var responsesSchema = new Schema({
  fromNumber: Number,
  inboundMsg: String,
  // createdAt: Timestamp,
});

var Responses = mongoose.model('Responses', responsesSchema);

var createResponse = function(fromNumber, inboundMsg) {
  Responses.create({
  	fromNumber: fromNumber,
  	inboundMsg: inboundMsg
  }, function(err, data) {
  	if (err) {
  	  throw err;
  	}
  	console.log('data', data);
  })
}

module.exports.Responses = Responses;
module.exports.createResponse = createResponse;