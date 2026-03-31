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

import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const oauthAccounts = pgTable("oauth_accounts", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id"),

 provider: text("provider"),

 providerUserId: text("provider_user_id")

})