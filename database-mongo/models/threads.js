var db = require('../index.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Threads schema

var threadsSchema = new Schema({
  outboundMsg: String,
  groupName: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contacts'}],
  responses: Array
});

var Threads = mongoose.model('Threads', threadsSchema);

var createNewThread = function(groupName, callback) {
  console.log('Creating new thread');
  Threads.create({
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
