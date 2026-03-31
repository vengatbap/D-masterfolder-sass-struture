
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const products = pgTable("products", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name"),

 slug: text("slug"),

 description: text("description")

})