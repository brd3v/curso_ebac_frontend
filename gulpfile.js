const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const sourcemaps = require('gulp-sourcemaps')
function comprimeImagens(){
    return gulp.src('./source/images/*')
            .pipe(imagemin())
            .pipe(gulp.dest('./build/images'))
}

function comprimeScript(){
    return gulp.src('./source/scripts/*')
            .pipe(uglify())
            .pipe(gulp.dest('./build/scripts'))
}


function compilaSass(){
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
    .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.style = compilaSass
exports.script = comprimeScript
exports.images= comprimeImagens