const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function testGulp() {
  console.log("Iniciando as Tarefas do Projeto");
}

function compilaSass() {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(gulp.dest("./build/css/"));
}

exports.default = gulp.parallel(compilaSass);

exports.watch = function () {
  gulp.watch("./src/sass/**/*.scss", gulp.parallel(compilaSass));
}; // Aqui criamos uma função em paralelo para a execução do watch
