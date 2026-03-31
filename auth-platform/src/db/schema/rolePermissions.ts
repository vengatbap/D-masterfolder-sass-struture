
// 8️⃣ Role Permissions Mapping
// schema/rolePermissions.ts
import { pgTable, uuid } from "drizzle-orm/pg-core"

export const rolePermissions = pgTable("role_permissions", {

 roleId: uuid("role_id").notNull(),

 permissionId: uuid("permission_id").notNull()

})