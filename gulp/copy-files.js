(function() {
    'use strict'

module.exports = function(gulp, path) {
  return function() {

    //copy javascripts
    gulp.src([
        path.join('node_modules/jquery/dist/**/jquery.min.js'),
        path.join('node_modules/bootstrap/dist/**/bootstrap.min.js'),
        path.join('node_modules/tether/dist/**/*.min.js'),
      ])
      .pipe(gulp.dest(path.join('public/javascripts')));

    //copy css
    gulp.src([
        path.join('node_modules/bootstrap/dist/**/*.min.css'),
    ])
    .pipe(gulp.dest(path.join('public/stylesheets')));
  };
};
})();