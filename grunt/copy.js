module.exports = {
	"static": {
		"files": [{
			"expand": true,
			"cwd": "src/",
			"src": ["**/*", "!scripts/**", "!styles/**", "!templates/**"],
			"dest": "build/"
		}]
	}
};
