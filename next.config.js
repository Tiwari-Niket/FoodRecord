// /** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa')({
//   dest: 'public',
//   disable: process.env.NODE_ENV === 'development',
//   register: true
// });

// const nextConfig = withPWA({
//   experimental: {
//     appDir: true,
//     serverComponentsExternalPackages: ["mongoose"],
//   },
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
//   webpack(config) {
//     config.experiments = {
//       ...config.experiments,
//       topLevelAwait: true,
//     }
//     return config
//   }
// });

// module.exports = nextConfig;

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
  // manifest: {
  //   name: 'Devolvi',
  //   short_name: 'Devolvi',
  //   description: 'Keeping records for our employee.',
  //   "icons": [
  //     {
  //       "src": "/icons/icon-192x192.png",
  //       "sizes": "192x192",
  //       "type": "image/png"
  //     },
  //     {
  //       "src": "/icons/icon-256x256.png",
  //       "sizes": "256x256",
  //       "type": "image/png"
  //     },
  //     {
  //       "src": "/icons/icon-384x384.png",
  //       "sizes": "384x384",
  //       "type": "image/png"
  //     },
  //     {
  //       "src": "/icons/icon-512x512.png",
  //       "sizes": "512x512",
  //       "type": "image/png"
  //     }
  //   ],
  //   start_url: '/',
  //   background_color: '#ffffff',
  //   display: 'standalone',
  // },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
});

module.exports = nextConfig;