"use strict";

const { src, dest, pipe, serial, parallel } = require('gulp');

const gulpautoprefixer = require('gulp-autoprefixer');
const gulpconcat = require('gulp-concat');
const gulpsass = require('gulp-sass');

gulpsass.compiler = require('node-sass');

let dist = './dist';

function build(cb){
	console.log("Building...")
    
    cb();
}
 
function sass() {
  return src('./sass/*.scss')
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(dest('./css'));
};

function autoprefixer() {
	return src('./**/style.css')
		.pipe(gulpautoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(dest(dist));
}

exports.default = build;
exports.build = build;
exports.sass = sass;
exports.autoprefixer = autoprefixer;