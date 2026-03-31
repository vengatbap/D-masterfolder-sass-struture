
// 9️⃣ Organizations
// schema/organizations.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const organizations = pgTable("organizations", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id").notNull(),

 name: text("name").notNull(),

 createdAt: timestamp("created_at").defaultNow()

})