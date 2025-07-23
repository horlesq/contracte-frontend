/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "8000",
                pathname: "/storage/**",
            },
            // Add your production domain when ready
            // {
            //     protocol: 'https',
            //     hostname: 'yourdomain.com',
            //     pathname: '/storage/**',
            // }
        ],
    },
    // Optional: Configure other settings
    experimental: {
        // Any experimental features you want to enable
    },
};

export default nextConfig;
