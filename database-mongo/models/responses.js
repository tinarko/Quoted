var db = require('../index.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Responses schema

var responsesSchema = new Schema({
  fromNumber: Number,
  inboundMsg: String,
  // createdAt: Timestamp,
});

var Responses = mongoose.model('Responses', responsesSchema);

var createResponse = function(fromNumber, inboundMsg, callback) {
  console.log('creating Response in db')
  Responses.create({
  	fromNumber: fromNumber,
  	inboundMsg: inboundMsg
  }, function(err, data) {
  	if (err) {
  	  callback(err, null);
  	} else {
  	  console.log('data', data);
  	  callback(null, data);
  	}
  });
}

var createNewThread = function(callback) {
  console.log('Creating new thread')
  Threads.create({

  }, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      console.log('data', data);
      callback(null, data);
    }
  });
}

var findResponsesFromContactNumber = function(fromNumber, callback) {
  Responses.find({
  	fromNumber: fromNumber
  }, function(err, data) {
  	if (err) {
  	  callback(err, null);
  	} else {
  	  console.log('data', data);
  	  callback(null, data);
  	}
  });
}

module.exports.Responses = Responses;
module.exports.createResponse = createResponse;
module.exports.findResponsesFromContactNumber = findResponsesFromContactNumber;