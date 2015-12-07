
var controllers = require('../app/controllers')

module.exports = function (app) {
	app.use('/input', controllers.input);
	app.use('/dbgenerator', controllers.dbgenerator);
	app.use('/test', controllers.test);
	app.use('/statistics',controllers.statistics);
	// todo / redirect to input/view/index
};
