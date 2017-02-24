var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var Items = new Schema({
    name          : String,
    description   : String,
    imageLocation : String,
    price         : Number
  });
  mongoose.model("Items", Items);
};
