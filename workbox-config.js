module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,ico,webp,html,js,mp4}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};