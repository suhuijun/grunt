module.exports = function (grunt){ 
    grunt.initConfig({
        cssmin: {
            'zdhgj.min.css':'自动化构建.css'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-cssmin');  

    grunt.registerTask('default', ['cssmin']);

}