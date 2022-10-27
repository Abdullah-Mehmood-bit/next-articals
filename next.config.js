/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://www.infoanimalscare.com/?p=167&fbclid=IwAR09OFgBapd_rzfl_BFQTkx1OTGAhaxakeg4C5eCdTZK-MYlpWpNTRJ1hxU',
        permanent: false
      }
    ];
  }
}

module.exports = nextConfig
