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
      // custom here
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
