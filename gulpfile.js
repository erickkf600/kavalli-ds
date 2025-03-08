const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const del = require("del");
let cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
var basePath = "./projects/kds-angular/src/";

gulp.task("clean", () => {
return del(["./dist/kds-angular/styles/"]);
});

gulp.task("compose-css", () => {
return gulp.src([basePath+"styles.scss", basePath+"**/*.component.scss"])
.pipe(sass().on("error",sass.logError))
.pipe(cleanCSS({compatibility: "ie8"}))
.pipe(concat("styles.css"))
.pipe(gulp.dest("./dist/kds-angular/styles/"));
});


gulp.task("default", gulp.series(["clean", "compose-css"]));
