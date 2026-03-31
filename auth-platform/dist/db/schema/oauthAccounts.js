"use strict";
// // OAuth Accounts schema placeholder
// export interface OAuthAccount {
//   id: string;
//   userId: string;
//   provider: string;
//   providerId: string;
//   providerData?: any;
//   createdAt: Date;
//   updatedAt: Date;
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.oauthAccounts = void 0;
const pg_core_1 = require("drizzle-orm/pg-core");
exports.oauthAccounts = (0, pg_core_1.pgTable)("oauth_accounts", {
    id: (0, pg_core_1.uuid)("id").primaryKey().defaultRandom(),
    provider: (0, pg_core_1.text)("provider"),
    providerUserId: (0, pg_core_1.text)("provider_user_id"),
    userId: (0, pg_core_1.uuid)("user_id")
});
