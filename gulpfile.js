const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify')
const images = require('gulp-imagemin');

function comprimeImagem(){
    return gulp.src('./source/images/*')
        .pipe(images())
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavascript(){
    return gulp.src('./source/scripts/*js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed' //faz o arquivo main.css ficar comprimido e ocupar menos bytes
        }))
        .pipe(sourcemaps.write('./maps')) 
        .pipe(gulp.dest('./build/styles'));
}

exports.sass = compilaSass;
exports.javascript = comprimeJavascript;
exports.images = comprimeImagem;
exports.default = function(){
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(comprimeJavascript));
}
