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

import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const auditLogs = pgTable("audit_logs", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 userId: uuid("user_id"),

 action: text("action"),

 ipAddress: text("ip_address"),

 createdAt: timestamp("created_at").defaultNow()

})