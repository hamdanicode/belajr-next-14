import type { Config } from "drizzle-kit";
export default {
  schema: "./src/schemas/*",
  out: "./drizzle",
  driver:"pg",
  dbCredentials:{
    connectionString:process.env.PG_URL
  }
} satisfies Config;