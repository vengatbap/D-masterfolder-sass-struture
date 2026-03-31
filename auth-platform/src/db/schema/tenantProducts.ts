
// 12️⃣ Tenant Products
// schema/tenantProducts.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const tenantProducts = pgTable("tenant_products", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 productId: uuid("product_id"),

 status: text("status").default("active")

})