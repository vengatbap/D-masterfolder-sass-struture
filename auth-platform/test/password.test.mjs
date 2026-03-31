import assert from "node:assert/strict";
import test from "node:test";

test("hashPassword and comparePassword round-trip a valid password", async () => {
  const { hashPassword, comparePassword } = await import("../src/utils/password.ts");

  const password = "correct horse battery staple";
  const hash = await hashPassword(password);

  assert.notEqual(hash, password);
  assert.equal(await comparePassword(password, hash), true);
  assert.equal(await comparePassword("wrong-password", hash), false);
});
