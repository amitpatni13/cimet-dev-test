/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['devcore02.cimet.io'],
    }, 
    experimental: {
        optimizeCss: true,
    }
}

module.exports = nextConfig
