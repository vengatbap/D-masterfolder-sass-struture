// // API Keys schema placeholder
// export interface ApiKey {
//   id: string;
//   tenantId: string;
//   name: string;
//   key: string;
//   permissions: string[];
//   isActive: boolean;
//   expiresAt?: Date;
//   createdAt: Date;
//   updatedAt: Date;
// }

import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const apiKeys = pgTable("api_keys", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 name: text("name"),

 keyHash: text("key_hash"),

 status: text("status")

})