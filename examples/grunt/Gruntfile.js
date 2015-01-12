module.exports = configureGrunt;

function configureGrunt(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: [
        'Gruntfile.js',
        'src/{,**/}*.js',
      ],
    },
    uglify: {
      all: {
        files: {
          'dest/app.js': ['src/*.js']
        },
      },
      options: {
        sourceMap: true,
        sourceMapIncludeSources: true
      },
    },
    // ...
  });

  // this will be run via `$ grunt`
  grunt.registerTask('default', [
    'jshint:all',
    'uglify:all',
  ]);
}
