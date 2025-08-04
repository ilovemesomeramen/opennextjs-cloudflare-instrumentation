import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    env: {
        OTEL_EXPORTER_OTLP_ENDPOINT: "http://localhost:8080"
    }
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
