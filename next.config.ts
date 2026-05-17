import dotenv from "dotenv";
import path from "path";
import type { NextConfig } from "next";

dotenv.config({ path: path.join(process.cwd(), ".env.local") });
dotenv.config({ path: path.join(process.cwd(), ".env") });

const nextConfig: NextConfig = {};

export default nextConfig;
