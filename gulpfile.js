"use strict";

const { src, dest, pipe, series, parallel } = require('gulp');

const gulpautoprefixer = require('gulp-autoprefixer');
const gulpconcat = require('gulp-concat');
const gulpsass = require('gulp-sass');
const uglify = require('gulp-uglify');
const pump = require('pump');

gulpsass.compiler = require('node-sass');

let dist = './dist';

function sass() {
  return src('./sass/*.scss')
    .pipe(gulpsass().on('error', gulpsass.logError))
    .pipe(dest('css'));
};

function autoprefixer() {
	return src('./**/style.css')
		.pipe(gulpautoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(dest(dist));
}

function compress() {
    return src('./scripts/**/*.js')
      .pipe(uglify())
      .pipe(dest(dist));
};

function copyHTML() {
  return src(['./*.html', './*.ico'])
      .pipe(dest(dist));
}

function copyIMG() {
  return src('./img/**', {base: './'})
      .pipe(dest(dist));
}


const copy = parallel(copyHTML, copyIMG);
const build = parallel(series(sass, autoprefixer), compress);

exports.default = build;
exports.sass = sass;
exports.autoprefixer = autoprefixer;
exports.compress = compress;
exports.copy = copy;
