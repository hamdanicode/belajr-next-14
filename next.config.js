/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@types/bcryptjs'],
      },
};

module.exports = nextConfig;
