var db = require('../index.js');
var mongoose = require('mongoose');

// Requests schema

var requestsSchema = new Schema({
  outboundMsg: String,
  groupName: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacts'}]
});

var Requests = mongoose.model('Requests', requestsSchema);

module.exports.Requests = Requests;