# node-fileset

Exposes a basic wrapper on top of
[Glob](https://github.com/isaacs/node-glob) /
[minimatch](https://github.com/isaacs/minimatch) combo both written by
@isaacs. Glob now uses javascript instead of C++ bindings and make it
usable in node 0.6.x and windows platforms.

[![Build Status](https://secure.travis-ci.org/mklabs/node-fileset.png)](http://travis-ci.org/mklabs/node-fileset)

Enable multiples patterns matching, and include exlude ability. This is
bascially just sugar API syntax where you can specify a list of includes
and optionnal exclude patterns. It works by setting up the necessary
miniglob "fileset" and filtering out the results using minimatch.

## install

    npm install fileset

## usage

Can be used with callback or emitter style.

* **include**: list of glob patterns `foo/**/*.js *.md src/lib/**/*`
* **exclude**: *optional* list of glob patterns to filter include
  results `foo/**/*.js *.md`
* **callback**: *optional* function that gets called with an error if
  something wrong happend, otherwise null with an array of results

The callback is optional since the fileset method return an instance of
EventEmitter which emit different events you might use:

* *match*: Every time a match is found, miniglob emits this event with
  the pattern.
* *include*: Emitted each time an include match is found.
* *exclude*: Emitted each time an an exclude match is found and filtered
  out from the fileset.
* *end*:  Emitted when the matching is finished with all the matches
  found, optionnaly filterd by the exclude patterns.

#### callback

    var fileset = require('fileset');

    fileset('**/*.js', '**.min.js', function(err, files) {
      if (err) return console.error(err);

      console.log('Files: ', files.length);
      console.log(files);
    });


#### event emitter

    var fileset = require('fileset');

    fileset('**.coffee README.md *.json Cakefile **.js', 'node_modules/**')
      .on('match', console.log.bind(console, 'error'))
      .on('include', console.log.bind(console, 'includes'))
      .on('exclude', console.log.bind(console, 'excludes'))
      .on('end', console.log.bind(console, 'end'));

fileset returns an instance of EventEmitter, with an `includes` property
which is the array of Fileset objects (inheriting from
`miniglob.Miniglob`) that were used during the mathing process, shoud
you want to use them individually.

Check out the
[tests](https://github.com/mklabs/node-fileset/tree/master/tests) for
more examples.

## tests

just run `npm test`

## why

mainly as a build tool with cake files, to provide me an easy way to get
a list of files by either using glob or path patterns, optionnaly
allowing exclude patterns to filter out the results.

All the magic is happening in
[Glob](https://github.com/isaacs/node-glob) and
[minimatch](https://github.com/isaacs/minimatch), check them out !
