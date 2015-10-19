
var tb = require('../../field/tingyuanyujianzhu')
module.exports = function (orm, db) {
    var Comment = db.define('tingyuanyujianzhu', tb.backendfield());
};
