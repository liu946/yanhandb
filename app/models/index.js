var orm      = require('orm');
var settings = require('../../conf/conf');

var connection = null;

function setup(db, cb) {
  require('./cunzhen')(orm, db);
  require('./biaozhixinggouzhuwu')(orm, db);
  require('./jiedaokongjian')(orm, db);
  require('./kaichangkongjian')(orm, db);
  require('./tingyuanyujianzhu')(orm, db);

  return cb(null, db);
}

module.exports = function (cb) {
  if (connection) return cb(null, connection);

  orm.connect(settings.database, function (err, db) {
    if (err) return cb(err);

    connection = db;
    setup(db, cb);
  });
};
