/** @type {import('next').NextConfig} */

const nextConfig = {
    // When we get images from a database, nextJs warn us to spesify these things.
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mcgxonulxclcyrtynujv.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/cabin-images/**",
            },
        ],
    },
};

export default nextConfig;
