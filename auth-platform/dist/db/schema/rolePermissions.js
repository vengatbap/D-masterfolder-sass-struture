"use strict";
// // Role Permissions schema placeholder
// export interface RolePermission {
//   id: string;
//   roleId: string;
//   permissionId: string;
//   createdAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolePermissions = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.rolePermissions = (0, pg_core_1.pgTable)("role_permissions", {
    roleId: (0, pg_core_1.uuid)("role_id").notNull(),
    permissionId: (0, pg_core_1.uuid)("permission_id").notNull()
});
