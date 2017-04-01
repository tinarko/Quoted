var db = require('../index.js');
var mongoose = require('mongoose');

// Threads schema

var threadssSchema = new Schema({
  outboundMsg: String,
  groupName: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacts'}],
  // adding responses array
  responses: Array
  // responses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Responses'}]
});

var Threads = mongoose.model('Threads', threadsSchema);

module.exports = Threads;