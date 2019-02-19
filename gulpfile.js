"use strict";

const { src, dest, pipe, serial, parallel } = require('gulp');

const gulp-autoprefixer = require('gulp-autoprefixer');
const gulp-concat = require('gulp-concat');
const gulp-sass = require('gulp-sass');

gulp-sass.compiler = require('node-sass');

let dist = './dist/';

function build(cb){
	console.log("Building...")
    
    cb();
}
 
function sass() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};

exports.default = build;