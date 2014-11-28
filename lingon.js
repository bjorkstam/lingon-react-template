#!/usr/bin/env node

var lingon = require('lingon'),
    react = require('gulp-react');
    sass = require('gulp-sass'),
    browserify = require('gulp-browserify');

lingon.config.directiveFileTypes.push('jsx', 'scss');
lingon.rewriteExtension('jsx', 'js');
lingon.rewriteExtension('scss', 'css');

lingon.postProcessors.set('jsx', function (context, globals) {
    return react();
});

lingon.postProcessors.set('scss', function (context, globals) {
    return sass();
});

lingon.postProcessors.push('jsx', function (context, globals) {
    return browserify();
});