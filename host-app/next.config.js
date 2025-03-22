const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'main',
        remotes: {
          productsRemote: `productsRemote@${process.env.REACT_APP_PRODUCTS_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          basketRemote: `basketRemote@${process.env.REACT_APP_BASKET_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`
        },
        filename: 'static/chunks/remoteEntry.js',
      })
    );
    return config;
  }
}

module.exports = nextConfig
