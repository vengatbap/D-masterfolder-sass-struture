import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const userProfiles = pgTable("user_profiles", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id").notNull(),

 firstName: text("first_name"),

 lastName: text("last_name"),

 phone: text("phone"),

 avatarUrl: text("avatar_url"),

 timezone: text("timezone")

})