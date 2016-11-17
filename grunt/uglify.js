module.exports = {
	"prod": {
		"options": {
			"preserveComments": "some"
		},
		"files": [{
			"expand": true,
			"cwd": "build/scripts",
			"src": "**/*.js",
			"dest": "build/scripts"
		}]
	}
};
