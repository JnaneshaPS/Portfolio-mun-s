const withTM = require('next-transpile-modules')(['mongodb']);

module.exports = withTM({
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'mongodb-client-encryption': false,
      'fs': false,
      'child_process': false,
      'tls': false,
    };
    return config;
  },
});
