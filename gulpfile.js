var gulp = require('gulp'), 
minifyCss = require("gulp-minify-css"), 
uglify = require("gulp-uglify")
concat = require('gulp-concat')
watch = require('gulp-watch');

gulp.task('minify-css', function () {
    gulp.src(['assets/css/bootstrap.min.css',
            'assets/css/dataTables.bootstrap4.min.css',    
            'assets/css/responsive.bootstrap4.min.css',
            'assets/css/buttons.bootstrap4.min.css',
            'assets/css/owl-carousel.css',
            'assets/css/animate.css',
            'assets/css/lightbox.css',
            'assets/font-awesome/css/font-awesome.min.css',
            'assets/css/main-sass.css',
            'assets/css/main-gulp.css',
        ])
    .pipe(concat('main-gulp.css'))
    .pipe(gulp.dest('public/css/'));
});


gulp.task('minify-js', function () {
    gulp.src(['assets/js/jquery.min.js',
            'assets/js/tether.min.js',
            'assets/js/bootstrap.min.js',
            'assets/js/jquery.dataTables.min.js',
            'assets/js/dataTables.bootstrap4.min.js',
            'assets/js/dataTables.responsive.min.js',
            'assets/js/responsive.bootstrap4.min.js',
            'assets/js/owl-carousel.js',
            'assets/js/lightbox.js',
            'assets/js/wow.min.js',
            'assets/js/custom.js'
        ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
    gulp.watch('assets/css/**/*.css', ['minify-css']);
    gulp.watch('assets/js/*.js', ['minify-js']);
});

gulp.task('default', ['minify-css', 'minify-js', 'watch']);