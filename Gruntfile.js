module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			projeto: {
				expand:true,
				cwd: 'loja',
				src: '**',
				dest: 'dist'
			}	
		},
		clean: ['dist'],
		imagemin: {
			projeto: {
				expand:true,
				cwd: 'dist/img',
				src:'**/*.{png,jpg,gif}',
				dest: 'dist/img'
			}
		}


	});

	grunt.registerTask('default', ['clean', 'copy']);
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('minifica', ['useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin', 'imagemin']);
}
