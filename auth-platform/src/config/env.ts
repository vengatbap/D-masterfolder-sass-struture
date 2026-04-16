import dotenv from "dotenv"
import fs from "fs"

if (fs.existsSync(".env.local")) {
  dotenv.config({ path: ".env.local" })
} else {
  dotenv.config()
}

export const env = {
  PORT: process.env.PORT || "5000",
  DATABASE_URL: process.env.DATABASE_URL!,
  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
  REDIS_URL: process.env.REDIS_URL!
}