const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function testGulp() {
  console.log("Iniciando as Tarefas do Projeto");
}

function compilaSASS() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/css/"));
}

exports.default = gulp.parallel(testGulp, compilaSASS);
