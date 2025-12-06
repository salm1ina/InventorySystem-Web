import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",

  client: {
    output: "./node_modules/@prisma/client",
    engine: {
      sideEffects: false,
    },
  },

  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.js",
  },

  datasource: {
    // tempat database URL
    url: env("DATABASE_URL"),
  },
});
