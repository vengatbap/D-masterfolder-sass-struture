
// schema/featureFlags.ts
import { pgTable, uuid, boolean } from "drizzle-orm/pg-core"

export const featureFlags = pgTable("feature_flags", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 featureId: uuid("feature_id"),

 enabled: boolean("enabled").default(true)

})