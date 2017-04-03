var db = require('../index.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Threads schema

var threadsSchema = new Schema({
  outboundMsg: String,
  groupName: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacts'}], 
  // contacts: Array, // Currently saved as an array of arrays: [[name, number], [name, number]] 
  responses: Array // of objects that looks like: {fromNumber: Number, inboundMsg: String,}
});

var Threads = mongoose.model('Threads', threadsSchema);

var createNewThread = function(groupName, callback) {
  console.log('Creating new thread');
  Threads.create({
    // outboundMsg: outboundMsg,
    groupName: groupName
  }, function(err, data) {
    if (err) {
      callback(err, null);
    } else {
      console.log('data', data);
      callback(null, data);
    }
  });
}

module.exports.Threads = Threads;
module.exports.createNewThread = createNewThread;
