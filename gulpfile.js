const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function compilaSass() {
  return gulp
    .src("./src/sass/main.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/css/"));
}

function scripts() {
  return gulp
    .src("./src/scripts/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/js"));
}

function images() {
  return gulp
    .src("./src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

exports.default = gulp.parallel(images, compilaSass, scripts);

exports.watch = function () {
  gulp.watch("./src/sass/**/*.scss", gulp.parallel(compilaSass));
  gulp.watch("./src/scripts/*.js", gulp.parallel(scripts));
}; // Aqui criamos uma função em paralelo para a execução do watch
