module.exports = function (grunt) {

    grunt.initConfig({
        apidoc: {
            mypp: {
              src: "app/",
              dest: "apidoc/",
              options: {
                debug: true,
                includeFilters: [ ".*\\.js$" ],
                excludeFilters: [ "node_modules/" ]
              }
            }
          },
        // jshint: {
        //     files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        //     options: {
        //         globals: {
        //             jQuery: true
        //         }
        //     }
        // },
        // watch: {
        //     files: ['<%= jshint.files %>'],
        //     tasks: ['jshint']
        // }
    });

    // grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-apidoc');

    //grunt.registerTask('default', ['jshint']);
    grunt.registerTask('default', ['grunt-apidoc']);
    grunt.registerTask('speak', function() {
        console.log('I am speaking.');
    });
}