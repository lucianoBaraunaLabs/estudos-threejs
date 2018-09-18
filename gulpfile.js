const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('task:server', () => {
  browserSync.init({
    server: {
      baseDir: './src/'
    }
  })
  gulp.watch([ "**/*.html", "**/*.js" ]).on("change", browserSync.reload);
})


gulp.task('default', ['task:server'])
