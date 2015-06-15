module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ['*.js'],
      options: {
        globals: {

        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint']);
  
};