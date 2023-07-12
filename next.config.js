const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
    images: {
      domains: ['lh3.googleusercontent.com'],
    },
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
});

module.exports = nextConfig;