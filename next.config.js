/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  i18n: {
    locales: ['ja', 'fr'],
    defaultLocale: 'ja',
    // localeDetection: false,
  },
};

module.exports = nextConfig;
