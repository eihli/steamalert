module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: [
        'server/tests/*.js',
        'server/*.js',
        'Gruntfile.js',
        'apiConfig.js'
      ],
      options: {
        globals: {

        }
      }
    },
    mochaTest: {
      src: ['server/tests/*.js'],
    },
    watch: {
      src: {
        files: [
          'server/**/*.js',
          'Gruntfile.js',
          'apiConfig.js'
        ],
        tasks: ['jshint', 'mochaTest']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
};