import type { Config } from "drizzle-kit"
import dotenv from "dotenv"
import fs from "fs"

if (fs.existsSync(".env.local")) {
  dotenv.config({ path: "./.env.local" })
} else {
  dotenv.config()
}

export default {
  schema: "./src/db/schema/*",
  out: "./drizzle/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
} satisfies Config