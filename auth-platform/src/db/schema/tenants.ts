import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const tenants = pgTable("tenants", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name").notNull(),

 plan: text("plan").default("free"),

 status: text("status").default("active"),

 createdAt: timestamp("created_at").defaultNow()

})