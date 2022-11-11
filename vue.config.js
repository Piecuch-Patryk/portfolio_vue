module.exports = {
  publicPath: '',
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Patryk Piecuch Portfolio',
    },
  },
  pwa: {
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      navigateFallback: '/index.html',
      cleanupOutdatedCaches: true,
      importWorkboxFrom: 'local',
      importScripts: ['/sw.js']
    }
  },
}