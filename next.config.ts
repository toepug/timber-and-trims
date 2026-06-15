import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Pin the project root so Turbopack doesn't pick up the unrelated
  // package-lock.json in the parent C:\dev directory.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
