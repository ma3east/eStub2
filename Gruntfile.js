module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
          // when this task is run, lint the Gruntfile and all js files in src
          build: ['Gruntfile.js', 'server.js', 'public/js/**/*.js', 'app/**/*.js'] //or public if we are going to use that as folder name
        },

        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
          },
          build: {
            files: {
                // e.g 'dist/js/magic.min.js': 'src/js/magic.js'
                // another e.g. 'build/style.css': 'style.css'
                'build/style.css': 'style.css'
              }
            }
          },

          watch: {
            styles: {
              files: ['public/css/*.css' 'style.css'], 
              tasks: ['autoprefixer', 'csslint'] 
            },
            // for scripts, run jshint
            scripts: { 
              files: 'public/js/*.js', 
              tasks: ['jshint'] 
            } 
          },

          nodemon: {
            dev: {
              script: 'server.js'
            }
          },

          // run watch and nodemon at the same time
          concurrent: {
            options: {
              logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
          }   


      }); //closes grunt initconfig


grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-contrib-csslint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-nodemon');
grunt.loadNpmTasks('grunt-concurrent');

grunt.registerTask('default', ['jshint', 'csslint', 'autoprefixer', 'concurrent']);

};