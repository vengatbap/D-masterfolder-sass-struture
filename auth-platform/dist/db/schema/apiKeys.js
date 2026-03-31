"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeys = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.apiKeys = (0, pg_core_1.pgTable)("api_keys", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    tenantId: (0, pg_core_1.uuid)("tenant_id").notNull(),
    name: (0, pg_core_1.text)("name"),
    keyHash: (0, pg_core_1.text)("key_hash"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow()
});
