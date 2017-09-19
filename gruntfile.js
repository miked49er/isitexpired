module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ["lib/js/*.js"],
      options: {
        esnext: true,
        globals: {
          jQuery: true
        } // globals
      } // options
    }, // jshint
    uglify: {
      options: {
        beautify : false, //Makes code readable so that the debugger can be used
        mangle: {
          except: [
            '$timeout',
            '$eval'
          ]
        } // mangle
      }, // options
      my_target: {
        files: {
          'js/script.min.js': ['lib/js/*.js']
        } // files
      } // my_target
    }, // uglify
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['lib/js/*.js'],
        tasks: ['uglify', 'jshint']
      }, // scripts
      html: {
        files: ['/*.html']
      } // html
    } // watch
  }); // initConfig


  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask('js', ['uglify']);
  grunt.registerTask('default', ['watch']);
};
