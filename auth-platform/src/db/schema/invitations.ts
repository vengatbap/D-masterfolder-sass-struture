
// schema/invitations.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const invitations = pgTable("invitations", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 email: text("email"),

 roleId: uuid("role_id"),

 token: text("token"),

 status: text("status"),

 expiresAt: timestamp("expires_at")

})