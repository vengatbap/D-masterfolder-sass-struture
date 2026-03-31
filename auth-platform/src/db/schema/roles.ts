
import { pgTable, uuid, text, boolean } from "drizzle-orm/pg-core"

export const roles = pgTable("roles", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 name: text("name").notNull(),

 isGlobal: boolean("is_global").default(false)

})