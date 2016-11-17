module.exports = {
	"dev": {
		"options": {
			"port": 8000,
			"hostname": "*",
			"base": "build/",
			middleware: function (connect, options, middlewares) {
				middlewares.unshift(function (req, res, next) {
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.setHeader('Access-Control-Allow-Methods', '*');
					return next();
				});
				return middlewares;
			}
		}
	}
};
