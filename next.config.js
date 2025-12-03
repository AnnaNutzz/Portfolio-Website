/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'firebasestorage.googleapis.com' },
            { protocol: 'https', hostname: 'imgur.com' },
            { protocol: 'https', hostname: 'i.imgur.com' },
            { protocol: 'https', hostname: 'github.com' },
            { protocol: 'https', hostname: 'raw.githubusercontent.com' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'media.licdn.com' },
            { protocol: 'https', hostname: 'images.pexels.com' }
        ],
    },
};

module.exports = nextConfig;
