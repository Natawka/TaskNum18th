module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
    
    dist: {
      src: ['js/source/*.js'],
      dest: 'js/build/main.min.js'
    }
	
  },
    uglify: {
    my_target: {
      files: {
        'js/build/main.min.js': ['js/build/main.min.js']
      }
    }
  },
  
  cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/build/main.css': ['css/source/*.css']
    }
  }
}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};