"use strict";
// // Permissions schema placeholder
// export interface Permission {
//   id: string;
//   name: string;
//   resource: string;
//   action: string;
//   description?: string;
//   createdAt: Date;
//   updatedAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissions = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.permissions = (0, pg_core_1.pgTable)("permissions", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    name: (0, pg_core_1.text)("name").notNull()
});
