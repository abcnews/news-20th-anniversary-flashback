#news-20th-anniversary-flashback

A look back at the ABC News homepage 20 years ago, with today's content.

# Dependencies
- [Node.js](http://nodejs.org/download/)
- [Ruby](http://www.ruby-lang.org/en/downloads/)
- [Sass](http://sass-lang.com/tutorial.html)

# Getting Started

```
$ npm start
```

This will run `npm install` to locally install Node package dependencies, then run the default grunt task which:
- Runs `grunt dev` to create a development build (see Tasks, below)
- Starts up a development server in the build directory, running on [http://localhost:8000](http://localhost:8000)
- Watches files under `src/` for changes, triggering partial development builds as required

# Grunt Tasks
The build tasks transform the project source in `src/` into a build under `build/`.

## Development Build: `$ grunt dev`
Creates a local development build of the project.
- JS in `scripts/` is linted by [JSHint](http://jshint.com/), then bundled by [Browserify](http://browserify.org/) into `scripts/index.js`
- Sass in `styles/` is compiled by Compass into `styles/index.css`
- Templates in `templates/` are available in JS via the `hbsfy` transform for browserify.
- All other directories/files are copied directly across, including those directly under `src/` (such as `index.html`)

Hint: If you organise your static files into directories called `images`, `fonts` & `data`, you'll have the benefit of proper caching by Akamai when you deploy to _contentftp_.

## Production Build: `$ grunt prod`
Creates a production-ready build of the project.

The build process is similar to the development build, except that scripts and styles are minified with the current version number (specified in `package.json`) prepended as a comment.

## Deployment `$ grunt deploy` and `$ grunt release`
Quickly deploy and/or create new releases from the commandline. See the documentation for  [news-deploy-project-grunt](https://stash.abc-dev.net.au/projects/NEWS/repos/news-deploy-project-grunt/browse) for more details.

## Default: `$ grunt`
Described above in _Getting Started_
