module.exports = function(grunt) {
  grunt.initConfig({
    lint: {
      files: [
        'app.js'
      ]
    },
    jshint: {
      options: {
        strict: true,
        undef: true
      }
    }
  });

  grunt.registerTask('default', 'lint');
};
