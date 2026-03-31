"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.users = (0, pg_core_1.pgTable)("users", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    tenantId: (0, pg_core_1.uuid)("tenant_id"),
    email: (0, pg_core_1.text)("email").notNull(),
    password: (0, pg_core_1.text)("password"),
    emailVerified: (0, pg_core_1.boolean)("email_verified").default(false),
    roleId: (0, pg_core_1.uuid)("role_id")
});
