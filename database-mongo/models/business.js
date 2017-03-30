var db = require('../index.js');
var mongoose = require('mongoose');

var businessSchema = mongoose.Schema({
  businessName: {type: String, unique: true },
  businessAddress: String,
  businessCity: String,
  businessZip: String,
  businessRating: Number,
  businessRatingUrl: String,
  businessPhone: Number,
  businessCell: Number,
  businessEmail: String,
  businessPicture: {data: Buffer, contentType: String},
  businessType: [String], //Changed from Array
  businessLat: Number,
  businessLong: Number,
  businessPictureUrl: String,
  businessDescription: String
});

businessSchema.pre('save', function(next) {
  next();
});

var Business = mongoose.model('Business', businessSchema);

var addBiz = function(businessName, businessPhone, businessType) {
  if (arguments.length <= 2) {
    businessType = 'HRSF72';
  }
  Business.create({
    businessName: businessName,
    businessPhone: businessPhone,
    businessType: businessType,
    businessCity: 'San Francisco',
    businessAddress: 'Hack Reactor 6th Floor',
    businessPictureUrl: 'https://raw.githubusercontent.com/Thinkful/bootcamp-finder/master/bootcamps/hack-reactor/logo.png',
    businessRatingUrl: 'https://s3-media1.fl.yelpcdn.com/assets/2/www/img/f1def11e4e79/ico/stars/v1/stars_5.png'
  }, function(err, data) {
    console.log('newsaved');
  });
};

// Team forkly
addBiz('Tina Ko', 4085687438);
addBiz('Kyle Brad', 8016022123);
addBiz('Al Pawlicki', 5628959734);
addBiz('John Duong', 4085317972);


module.exports = Business;
// contact responses schema
// module.exports.Business = Business;

// var contactResponsesSchema = new Schema({
//   contactName: String,
//   contactNumber: Number,
//   contactResponse: Array
// });

// var addContact = function(name, number) {
//   Business.create({
//     contactName: name,
//     contactNumber: number
//   }, function(err, data) {
//     if (err) {
//       throw err;
//     } else {
//       console.log(data);
//     }
//   })
// };

// addContact('Tina Ko', 4085687438);
// addContact('John Duong', 4085317972);

// var contactResponses = mongoose.model('contactResponses', contactResponsesSchema);

// module.exports.contactResponses = contactResponses;





//CLASS DATA

// Test Data
// addBiz('Edwin', 7703357571, 'test');

// Test Class Data
// addBiz('Jason Kuo', 6267168334);
// addBiz('Edwin Brower', 7703357571);
// addBiz('Han Zhao', 5104568837);
// addBiz('Mike Liao', 4083182027);
// addBiz("Dan McSweeney", 9174637450);
// addBiz("Gabriel Certeza", 4156046691);
// addBiz("Dario Arteaga", 6282022873);
// addBiz("Kai Yu", 5107893730);
// addBiz("Jason An", 9255861585);
// addBiz("Billy Won", 4154179136);
// addBiz("Steve Reed", 6193064234);
// addBiz("Stephen Makowski", 9736538792);
// addBiz("Eddie Chou", 5108283061);
// addBiz("Jeffrey Briner", 4082293100);
// addBiz("Tim Nguyen", 3232290550);
// addBiz("Eugene Song", 7143389937);
// addBiz("Huan Chen", 4157419464);
// addBiz("Gary Wong", 4156974834);
// addBiz('Miss Tiff Lin', 6505150237);
// addBiz("Gary Wong", 4156974834);
// addBiz("Tayo Jolaosho", 9177553154);
// addBiz("Eugene", 9177503172);
