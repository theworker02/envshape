const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { checkEnv } = require("../src/index.js");

describe("envshape", () => {
  it("accepts matching types and rejects missing or wrong values", () => {
    const schema = { NAME: "string", PORT: "number", FLAG: "bool" };
    const ok = checkEnv(schema, { NAME: "app", PORT: "3000", FLAG: "true" });
    assert.equal(ok.ok, true);
    const bad = checkEnv(schema, { NAME: "", PORT: "x", FLAG: "maybe" });
    assert.equal(bad.ok, false);
    assert.equal(bad.errors.length, 3);
  });
});
