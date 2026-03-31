
// 7️⃣ Permissions Table
// schema/permissions.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const permissions = pgTable("permissions", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name").notNull(),

 description: text("description")

})