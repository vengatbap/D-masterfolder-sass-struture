import assert from "node:assert/strict";
import test from "node:test";

test("generateApiKey creates prefixed keys and hashKey is deterministic", async () => {
  const { generateApiKey, hashKey } = await import("../src/utils/apiKeys.ts");

  const key = generateApiKey();
  const anotherKey = generateApiKey();

  assert.match(key, /^sk_[0-9a-f]{64}$/);
  assert.match(anotherKey, /^sk_[0-9a-f]{64}$/);
  assert.notEqual(key, anotherKey);
  assert.equal(hashKey(key), hashKey(key));
  assert.notEqual(hashKey(key), hashKey(anotherKey));
});
