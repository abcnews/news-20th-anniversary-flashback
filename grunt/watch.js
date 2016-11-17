module.exports = {
	"options": {
		"livereload": true
	},
	"gruntfile": {
		"files": [
			"Gruntfile.js",
			"grunt/*.js"
		],
		"tasks": ["jshint:gruntfile"],
		"interrupt": true
	},
	"js": {
		"files": [
			"src/scripts/**/*",
			"src/templates/**/*.hbs",
			"node_modules/interactive-*/src/scripts/**/*",
			"node_modules/interactive-*/src/templates/**/*",
			"node_modules/util-*/src/scripts/**/*",
			"node_modules/util-*/src/templates/**/*"
		],
		"tasks": [
			"jshint:js",
			"browserify:dev"
		],
		"interrupt": true
	},
	"css": {
		"files": [
			"src/styles/**/*.scss",
			"node_modules/interactive-*/src/styles/**/*",
			"node_modules/util-*/src/styles/**/*"
		],
		"tasks": "sass:dev",
		"interrupt": true
	},
	"copy": {
		"files": [
			"src/**/*",
			"!src/scripts/*",
			"!src/styles/*",
			"!src/templates/*"
		],
		"tasks": "copy:static",
		"interrupt": true
	},
	"version": {
		"files": ["package.json"],
		"tasks": "version",
		"interrupt": true
	}
};
