import { pgTable, uuid, text, boolean } from "drizzle-orm/pg-core"

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  tenantId: uuid("tenant_id"),
  email: text("email").notNull(),
  password: text("password"),
  roleId: uuid("role_id"),
  emailVerified: boolean("email_verified").default(false)
})