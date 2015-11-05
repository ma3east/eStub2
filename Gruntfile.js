module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
          // when this task is run, lint the Gruntfile and all js files ilisted
          build: ['Gruntfile.js', 'server.js', 'public/js/**/*.js', 'public/js/app.js','app/**/*.js', 'config/db.js']
        },

        csslint: {
          strict: {
            options: {
              "import": 2
            }
          },
          files: ['public/css/style.css']
        },

        autoprefixer: {
          options: {
            browsers: ['last 2 versions', 'ie 8', 'ie 9']
          },
          build: {
            files: {
                'public/css/build/style.css': 'public/css/style.css'
              }
            }
          },

          watch: {
            styles: {
              files: ['public/css/style.css'], 
              tasks: ['autoprefixer', 'csslint'] 
            },
            // for scripts, run jshint
            scripts: { 
              files: ['Gruntfile.js', 'server.js', 'public/js/**/*.js', 'public/js/app.js','app/**/*.js', 'config/db.js'],
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