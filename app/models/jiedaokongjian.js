
var tb = require('../../field/jiedaokongjian')
module.exports = function (orm, db) {
  var Comment = db.define('jiedaokongjian', tb.backendfield());
};
