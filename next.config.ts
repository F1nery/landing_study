import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Fewer parallel workers than the default (all logical CPUs) to keep CPU usage down.
    cpus: 2,
    // Default is "childProcesses", which spawns many separate Node processes for Turbopack
    // plugins. "workerThreads" keeps that work inside threads on the main dev process.
    turbopackPluginRuntimeStrategy: "workerThreads",
  },
};

export default nextConfig;
