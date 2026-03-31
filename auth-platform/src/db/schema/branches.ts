
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const branches = pgTable("branches", {

 id: uuid("id").primaryKey().defaultRandom(),

 organizationId: uuid("organization_id"),

 name: text("name"),

 address: text("address"),

 timezone: text("timezone")

})