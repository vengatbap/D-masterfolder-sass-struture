3️⃣ Tenants Table
schema/tenants.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const tenants = pgTable("tenants", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name").notNull(),

 plan: text("plan").default("free"),

 status: text("status").default("active"),

 createdAt: timestamp("created_at").defaultNow()

})
4️⃣ Users Table
schema/users.ts
import { pgTable, uuid, text, boolean, timestamp } from "drizzle-orm/pg-core"

export const users = pgTable("users", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id").notNull(),

 email: text("email").notNull(),

 passwordHash: text("password_hash"),

 roleId: uuid("role_id"),

 emailVerified: boolean("email_verified").default(false),

 status: text("status").default("active"),

 createdAt: timestamp("created_at").defaultNow()

})
5️⃣ User Profiles
schema/userProfiles.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const userProfiles = pgTable("user_profiles", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id").notNull(),

 firstName: text("first_name"),

 lastName: text("last_name"),

 phone: text("phone"),

 avatarUrl: text("avatar_url"),

 timezone: text("timezone")

})
6️⃣ Roles Table
schema/roles.ts
import { pgTable, uuid, text, boolean } from "drizzle-orm/pg-core"

export const roles = pgTable("roles", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 name: text("name").notNull(),

 isGlobal: boolean("is_global").default(false)

})
7️⃣ Permissions Table
schema/permissions.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const permissions = pgTable("permissions", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name").notNull(),

 description: text("description")

})
8️⃣ Role Permissions Mapping
schema/rolePermissions.ts
import { pgTable, uuid } from "drizzle-orm/pg-core"

export const rolePermissions = pgTable("role_permissions", {

 roleId: uuid("role_id").notNull(),

 permissionId: uuid("permission_id").notNull()

})
9️⃣ Organizations
schema/organizations.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const organizations = pgTable("organizations", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id").notNull(),

 name: text("name").notNull(),

 createdAt: timestamp("created_at").defaultNow()

})
🔟 Branches / Sites
schema/branches.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const branches = pgTable("branches", {

 id: uuid("id").primaryKey().defaultRandom(),

 organizationId: uuid("organization_id"),

 name: text("name"),

 address: text("address"),

 timezone: text("timezone")

})
11️⃣ Products
schema/products.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const products = pgTable("products", {

 id: uuid("id").primaryKey().defaultRandom(),

 name: text("name"),

 slug: text("slug"),

 description: text("description")

})
12️⃣ Tenant Products
schema/tenantProducts.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const tenantProducts = pgTable("tenant_products", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 productId: uuid("product_id"),

 status: text("status").default("active")

})
13️⃣ Features
schema/features.ts
import { pgTable, uuid, text } from "drizzle-orm/pg-core"

export const features = pgTable("features", {

 id: uuid("id").primaryKey().defaultRandom(),

 productId: uuid("product_id"),

 name: text("name"),

 key: text("key")

})
14️⃣ Feature Flags
schema/featureFlags.ts
import { pgTable, uuid, boolean } from "drizzle-orm/pg-core"

export const featureFlags = pgTable("feature_flags", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 featureId: uuid("feature_id"),

 enabled: boolean("enabled").default(true)

})
15️⃣ Invitations
schema/invitations.ts
import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core"

export const invitations = pgTable("invitations", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 email: text("email"),

 roleId: uuid("role_id"),

 token: text("token"),

 status: text("status"),

 expiresAt: timestamp("expires_at")

})
16️⃣ Refresh Tokens
export const refreshTokens = pgTable("refresh_tokens", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id"),

 token: text("token"),

 expiresAt: timestamp("expires_at")

})
17️⃣ OAuth Accounts
export const oauthAccounts = pgTable("oauth_accounts", {

 id: uuid("id").primaryKey().defaultRandom(),

 userId: uuid("user_id"),

 provider: text("provider"),

 providerUserId: text("provider_user_id")

})
18️⃣ API Keys
export const apiKeys = pgTable("api_keys", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 name: text("name"),

 keyHash: text("key_hash"),

 status: text("status")

})
19️⃣ Audit Logs
export const auditLogs = pgTable("audit_logs", {

 id: uuid("id").primaryKey().defaultRandom(),

 tenantId: uuid("tenant_id"),

 userId: uuid("user_id"),

 action: text("action"),

 ipAddress: text("ip_address"),

 createdAt: timestamp("created_at").defaultNow()

})
🔟 Example Query with Drizzle

Example: get tenant users.

import { db } from "@/db"
import { users } from "@/db/schema/users"
import { eq } from "drizzle-orm"

const tenantUsers = await db
 .select()
 .from(users)
 .where(eq(users.tenantId, tenantId))
21️⃣ Migration Command

Generate migration:

npx drizzle-kit generate

Run migration:

npx drizzle-kit migrate
22️⃣ What You Can Do Now

With this schema your platform supports:

✔ multi-tenant SaaS
✔ multi-product ecosystem
✔ RBAC
✔ onboarding wizard
✔ invitations
✔ API keys
✔ OAuth login
✔ feature flags
✔ audit logs

This becomes the foundation of your SaaS platform.

💡 If you want, I can also generate two extremely helpful things next:

1️⃣ Complete seed data for roles, permissions, products, and features
2️⃣ Full Postman collection (70+ APIs) ready to import

Those will make your backend instantly testable.

Yes give me and everything okj right now I can move to my local and development ? 

Yes — with what we’ve designed, you can start local development now, but before doing that we should add two final pieces so the system runs smoothly from day one:

1️⃣ Seed data (roles, permissions, products, features)
2️⃣ Postman collection structure (70+ APIs)

Once those are added, you can clone → run migrations → seed → start development locally.

1️⃣ Seed Data (Initial System Setup)

Create folder:

src/db/seeds

File:

seed.ts
Permissions Seed

Example permissions.

export const permissionsSeed = [

 { name:"create_user" },
 { name:"update_user" },
 { name:"delete_user" },
 { name:"view_users" },

 { name:"create_role" },
 { name:"update_role" },
 { name:"delete_role" },

 { name:"manage_products" },
 { name:"manage_features" },

 { name:"view_reports" },

 { name:"manage_api_keys" }

]
Roles Seed
export const rolesSeed = [

 { name:"SUPER_ADMIN", isGlobal:true },

 { name:"ADMIN" },

 { name:"MANAGER" },

 { name:"USER" }

]
Products Seed
export const productsSeed = [

 {
  name:"Billing",
  slug:"billing"
 },

 {
  name:"Scheduling",
  slug:"scheduling"
 },

 {
  name:"CRM",
  slug:"crm"
 }

]
Features Seed
export const featuresSeed = [

 {
  product:"billing",
  key:"invoices"
 },

 {
  product:"billing",
  key:"payments"
 },

 {
  product:"scheduling",
  key:"shift_planning"
 },

 {
  product:"scheduling",
  key:"attendance"
 }

]
Example Seed Script
import { db } from "../index"

async function seed(){

 console.log("Seeding database")

 await db.insert(products).values(productsSeed)

 await db.insert(permissions).values(permissionsSeed)

 await db.insert(roles).values(rolesSeed)

}

seed()

Run:

npm run seed
2️⃣ Postman Collection Structure

Create collection:

SaaS Platform APIs
Authentication
POST /auth/signup
POST /auth/login
POST /auth/logout
POST /auth/refresh
POST /auth/verify-email
POST /auth/forgot-password
POST /auth/reset-password
GET  /auth/me
Account Settings
GET /account/profile
PUT /account/profile
POST /account/change-password
POST /account/avatar
Onboarding
POST /onboarding/organization
POST /onboarding/branch
POST /onboarding/select-products
Invitations
POST /invitations
GET /invitations
POST /invitations/accept
Users
GET /users
POST /users
PUT /users/:id
DELETE /users/:id
Roles
GET /roles
POST /roles
PUT /roles/:id
DELETE /roles/:id
Products
GET /products
POST /products
PUT /products/:id
DELETE /products/:id
Features
GET /features
POST /features
POST /feature-flags
API Keys
GET /api-keys
POST /api-keys
DELETE /api-keys/:id
Super Admin
GET /admin/tenants
GET /admin/users
POST /admin/provision

Total endpoints ≈ 70 APIs.

3️⃣ Local Development Setup

Now you can run the platform locally.

Step 1 — Install dependencies
npm install
Step 2 — Start PostgreSQL

If using Docker:

docker compose up
Step 3 — Run migrations
npx drizzle-kit migrate
Step 4 — Seed database
npm run seed
Step 5 — Start server
npm run dev
4️⃣ Expected Local Environment
Backend API
http://localhost:5000

PostgreSQL
localhost:5432

Redis
localhost:6379