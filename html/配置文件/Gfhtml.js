module.exports = function (grunt){ 
    grunt.initConfig({
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true,  
            },
            files: {
                src: './自动化构建.html',
                dest: 'dest/zdhgj.html'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-htmlmin');  

    grunt.registerTask('default', ['htmlmin']);
    
}