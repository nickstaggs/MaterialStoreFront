var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = function() {
  var Items = new Schema({
    name          : String,
    blurb         : String,
    description   : String,
    mainImage     : String,
    images        : Array,
    price         : Number
  });
  mongoose.model("Items", Items);
};
