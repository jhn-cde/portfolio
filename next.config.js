module.exports = {
  reactStrictMode: false,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en'
  },
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  }
}