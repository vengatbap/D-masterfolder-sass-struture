

import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const refreshTokens = pgTable("refresh_tokens", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id"),

 token: text("token"),

 expiresAt: timestamp("expires_at")

})