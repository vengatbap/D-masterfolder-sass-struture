"use strict";
// // Refresh Tokens schema placeholder
// export interface RefreshToken {
//   id: string;
//   userId: string;
//   token: string;
//   expiresAt: Date;
//   createdAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokens = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.refreshTokens = (0, pg_core_1.pgTable)("refresh_tokens", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    userId: (0, pg_core_1.uuid)("user_id").notNull(),
    token: (0, pg_core_1.text)("token").notNull(),
    expiresAt: (0, pg_core_1.timestamp)("expires_at")
});
