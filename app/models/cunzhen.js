
var tb = require('../../field/cunzhen')
module.exports = function (orm, db) {
  var Comment = db.define('cunzhen', tb.backendfield());
};
