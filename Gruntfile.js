module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: [
        'tests/server/**/*.js',
        '!tests/server/data/**/*.js',
        'server/**/*.js',
        'Gruntfile.js',
        'apiConfig.js'
      ],
      options: {
        globals: {

        }
      }
    },
    mochaTest: {
      src: [
        'tests/server/**/*.js',
        '!tests/server/data/**/*.js'
      ],
    },
    watch: {
      src: {
        files: [
          'server/**/*.js',
          'tests/**/*.js',
          'Gruntfile.js',
          'apiConfig.js'
        ],
        tasks: ['jshint', 'mochaTest']
      },
      html: {
        files: 'server/views/**/*.jade',
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
};