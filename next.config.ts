import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "vapmart.webestone.net",
                port: "",
                pathname: "/_next/**",
            },
        ],
    },
};

export default nextConfig;
