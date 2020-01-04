// next.config.js
const path = require('path');
const webpack = require('webpack');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    webpack (config, options) {
        config.resolve.alias['~'] = path.join(__dirname, '.');
        return config;
      },
      serverRuntimeConfig: {
        env: process.env.NODE_ENV
      }
});