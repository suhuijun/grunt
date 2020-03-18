module.exports = function (grunt){ 
    grunt.initConfig({
        uglify: {
            'zdhgj.min.js':'自动化构建.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');  

    grunt.registerTask('default', ['uglify']);
    
}