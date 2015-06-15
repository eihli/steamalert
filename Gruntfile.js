module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['*.js'],
      options: {
        globals: {

        }
      }
    },
    mochaTest: {
      src: ['server/tests/**/*.js'],
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint']);
  grunt.registerTask('test', ['mochaTest']);
};