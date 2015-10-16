
var tb = require('../../field/kaichangkongjian')
module.exports = function (orm, db) {
  var Comment = db.define('kaichangkongjian', tb.backendfield());
};
