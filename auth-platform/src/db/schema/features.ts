
// 13️⃣ Features
// schema/features.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const features = pgTable("features", {

 id: uuid("id").primaryKey().defaultRandom(),

 productId: uuid("product_id"),

 name: text("name"),

 key: text("key")

})