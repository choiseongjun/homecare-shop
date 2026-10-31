import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const seoPageCache = [
      { key: "Cache-Control", value: "public, max-age=120, must-revalidate" },
      { key: "Vercel-CDN-Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" },
    ];
    const feedCache = [
      { key: "Cache-Control", value: "public, max-age=300, must-revalidate" },
      { key: "Vercel-CDN-Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
    ];

    return [
      { source: "/", headers: seoPageCache },
      { source: "/apt/:path*", headers: seoPageCache },
      { source: "/blog/:path*", headers: seoPageCache },
      { source: "/cases/:path*", headers: seoPageCache },
      { source: "/regions/:path*", headers: seoPageCache },
      { source: "/(install|relocation|cleaning|repair|system-aircon|commercial-aircon|price|privacy|service-policy)", headers: seoPageCache },
      { source: "/sitemap.xml", headers: feedCache },
      { source: "/robots.txt", headers: feedCache },
      { source: "/rss.xml", headers: feedCache },
    ];
  },
};

export default nextConfig;
