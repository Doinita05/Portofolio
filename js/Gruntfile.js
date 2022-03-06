Gruntfile.js
module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'build/style.css': 'style.css'
                }
            }
        },
        watch: {
            styles: {
                files: ['style.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};

./node_modules/.bin/grunt watch

a {
  width: calc(50% - 2em)
}

a {
  width: -webkit-calc(50% - 2em);
  width: calc(50% - 2em)
}

a {
  width: calc(50% - 2em);
  transition: transform 1s
}

a {
  width: -webkit-calc(1% + 1em);
  width: calc(1% + 1em);
  -webkit-transition: -webkit-transform 1s;
  transition: -ms-transform 1s;
  transition: transform 1s
 }