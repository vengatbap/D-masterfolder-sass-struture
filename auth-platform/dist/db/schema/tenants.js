"use strict";
// // Tenants schema placeholder
// export interface Tenant {
//   id: string;
//   name: string;
//   domain?: string;
//   isActive: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenants = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.tenants = (0, pg_core_1.pgTable)("tenants", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)("name").notNull(),
    plan: (0, pg_core_1.text)("plan").default("free"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow()
});
