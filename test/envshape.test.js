const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { spawnSync } = require("node:child_process");
const { checkEnv, parseDotenv, exampleFromSchema } = require("../src/index.js");

const cli = path.join(__dirname, "..", "src", "cli.js");

function run(args, cwd) {
  return spawnSync(process.execPath, [cli, ...args], { encoding: "utf8", cwd });
}

describe("envshape", () => {
  it("accepts matching types and rejects missing or wrong values", () => {
    const schema = { NAME: "string", PORT: "number", FLAG: "bool" };
    const ok = checkEnv(schema, { NAME: "app", PORT: "3000", FLAG: "true" });
    assert.equal(ok.ok, true);
    const bad = checkEnv(schema, { NAME: "", PORT: "x", FLAG: "maybe" });
    assert.equal(bad.ok, false);
    assert.equal(bad.errors.length, 3);
  });

  it("fails extra keys under strict mode", () => {
    const result = checkEnv({ NAME: "string" }, { NAME: "app", EXTRA: "1" }, { strict: true });
    assert.equal(result.ok, false);
    assert.equal(result.errors[0].reason, "unexpected");
  });

  it("parses dotenv and prints an example template", () => {
    const env = parseDotenv("NAME=app\n# comment\nPORT=8080\n");
    assert.deepEqual(env, { NAME: "app", PORT: "8080" });
    assert.equal(exampleFromSchema({ NAME: "string", PORT: "number" }), "NAME=\nPORT=\n");
  });

  it("CLI check --env --strict --json", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "envshape-"));
    fs.writeFileSync(path.join(dir, "schema.json"), JSON.stringify({ NAME: "string", PORT: "number" }));
    fs.writeFileSync(path.join(dir, ".env"), "NAME=app\nPORT=3000\n");
    const ok = run(["check", "--env", ".env", "--json", "schema.json"], dir);
    assert.equal(ok.status, 0);
    assert.equal(JSON.parse(ok.stdout).ok, true);
    fs.writeFileSync(path.join(dir, ".env"), "NAME=app\nPORT=3000\nEXTRA=1\n");
    const bad = run(["check", "--env", ".env", "--strict", "schema.json"], dir);
    assert.equal(bad.status, 1);
    assert.match(bad.stdout, /EXTRA: unexpected/);
    const example = run(["example", "schema.json"], dir);
    assert.equal(example.status, 0);
    assert.equal(example.stdout, "NAME=\nPORT=\n");
    fs.rmSync(dir, { recursive: true, force: true });
  });
});
