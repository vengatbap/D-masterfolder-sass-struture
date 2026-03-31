import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const routesIndexPath = path.resolve(testDir, "../src/routes/index.ts");

test("routes index mounts each module router", async () => {
  const source = await readFile(routesIndexPath, "utf8");

  const expectedMounts = [
    "router.use('/api-keys', apiKeysRoutes);",
    "router.use('/auth', authRoutes);",
    "router.use('/oauth', oauthRoutes);",
    "router.use('/permissions', permissionsRoutes);",
    "router.use('/roles', rolesRoutes);",
    "router.use('/tenants', tenantsRoutes);",
    "router.use('/users', usersRoutes);",
  ];

  for (const mount of expectedMounts) {
    assert.equal(source.includes(mount), true, `Missing route mount: ${mount}`);
  }
});
