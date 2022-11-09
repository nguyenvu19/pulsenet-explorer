const path = require('path')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([])
const withOptimizedImages = require('next-optimized-images')
const withFonts = require('next-fonts')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

// next.js custom configuration goes here
const nextConfig = {
  env: {
    BACKEND_URL: 'https://localhost:8080',
  },
  webpack: (config, options) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      // '@app/theme': path.join(__dirname, 'theme'),
      // '@app/constants': path.join(__dirname, 'config/constants'),
      // '@app/pages': path.join(__dirname, 'pages'),
      // '@app/assets': path.join(__dirname, 'assets'),
      // '@app/layouts': path.join(__dirname, 'layouts'),
      // '@app/components': path.join(__dirname, 'components'),
      // '@app/config': path.join(__dirname, 'config'),
      // '@app/containers': path.join(__dirname, 'containers'),
      // '@app/redux': path.join(__dirname, 'redux'),
      // '@app/lib': path.join(__dirname, 'library'),
      // '@app/utils': path.join(__dirname, 'utils'),
      // '@app/widgets': path.join(__dirname, 'widgets'),
    }
    return config
  },
  webpack5: false,
}

// fix: prevents error when .css files are required by node
// if (typeof require !== 'undefined') {
//   require.extensions['.css'] = file => {};
// }

module.exports = withPlugins(
  [
    withTM,
    withOptimizedImages,
    withFonts,
    [
      withBundleAnalyzer,
      {
        analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html',
          },
          browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html',
          },
        },
      },
    ],
  ],
  nextConfig,
)
