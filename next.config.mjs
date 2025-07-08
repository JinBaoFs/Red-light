/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://121.41.46.130/api/:path*', // 代理到本地后端
            },
        ]
    },
};

export default nextConfig;
