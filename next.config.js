// next.config.js
const path = require('path');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    webpack (config, { isServer }) {
        config.resolve.alias['~'] = path.join(__dirname, '.');
        if (!isServer) {
          config.node = {
            fs: 'empty'
          }
      }
      return config;
    }
});