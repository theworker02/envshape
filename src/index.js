const fs = require("node:fs");

const TYPES = {
  string: (value) => typeof value === "string" && value.length > 0,
  number: (value) => value !== "" && Number.isFinite(Number(value)),
  bool: (value) => value === "true" || value === "false" || value === "1" || value === "0",
};

function checkEnv(schema, env = process.env) {
  const errors = [];
  for (const [key, type] of Object.entries(schema)) {
    const checker = TYPES[type];
    if (!checker) {
      errors.push({ key, reason: `unknown type ${type}` });
      continue;
    }
    if (!(key in env) || env[key] == null) {
      errors.push({ key, reason: "missing" });
      continue;
    }
    if (!checker(String(env[key]))) {
      errors.push({ key, reason: `expected ${type}` });
    }
  }
  return { ok: errors.length === 0, errors };
}

function checkSchemaFile(schemaPath, env = process.env) {
  const schema = JSON.parse(fs.readFileSync(schemaPath, "utf8"));
  return checkEnv(schema, env);
}

module.exports = { checkEnv, checkSchemaFile };
