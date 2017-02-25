var models = [Items.js];

exports.initialize = function() {
  var length = models.length;
  for (var i = 0; i < length; i++) {
    require(models[i])();
  }
};
