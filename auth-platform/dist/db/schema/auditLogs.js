"use strict";
// // Audit Logs schema placeholder
// export interface AuditLog {
//   id: string;
//   userId?: string;
//   action: string;
//   resource: string;
//   resourceId?: string;
//   details?: any;
//   ipAddress?: string;
//   userAgent?: string;
//   createdAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogs = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.auditLogs = (0, pg_core_1.pgTable)("audit_logs", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    userId: (0, pg_core_1.uuid)("user_id"),
    action: (0, pg_core_1.text)("action"),
    ip: (0, pg_core_1.text)("ip"),
    createdAt: (0, pg_core_1.timestamp)("created_at").defaultNow()
});
