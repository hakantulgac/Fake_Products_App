const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          './products': "./components/Products.js"
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
