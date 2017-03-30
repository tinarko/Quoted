var db = require('../index.js');
var mongoose = require('mongoose');

// Requests schema

var requestsSchema = new Schema({
  request: String,
  groupName: String,
  groupResponses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Responses'}]
});

var Requests = mongoose.model('Requests', requestsSchema);

module.exports.Requests = Requests;