var gulp=require('gulp');
var gulputil=require('gulp-uglify');

var cssmin=require('gulp-minify-css');
var minifyHtml=require('gulp-minify-html');

gulp.task('mycss', function () 
{
	gulp.src('css/*.css').pipe(cssmin()).pipe(gulp.dest('css'));
});
gulp.task('myhtml', function () 
{
	gulp.src('*.html').pipe(minifyHtml()).pipe(gulp.dest('./'));
});
gulp.task('default',['mycss','myhtml']);        