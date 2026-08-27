/* @ts-self-types="./mod.d.ts" */

import fs from "node:fs";

const PACKAGE = Object.freeze({
  name: "@theworker02/envshape",
  version: "1.2.0",
  runtime: "node",
  registry: "jsr",
});

const ENV_TYPES = Object.freeze(["string", "number", "bool"]);

const TYPES = Object.freeze({
  string: (value) => typeof value === "string" && value.length > 0,
  number: (value) => value !== "" && Number.isFinite(Number(value)),
  bool: (value) => value === "true" || value === "false" || value === "1" || value === "0",
});

function isEnvType(type) {
  return ENV_TYPES.includes(String(type));
}

function validateValue(type, value) {
  return isEnvType(type) && TYPES[type](String(value));
}

function parseDotenv(text) {
  const env = {};
  for (const raw of String(text).split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eq = line.indexOf("=");
    if (eq === -1) continue;
    const key = line.slice(0, eq).trim();
    if (!key) continue;
    let value = line.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

function loadDotenvFile(filePath) {
  return parseDotenv(fs.readFileSync(filePath, "utf8"));
}

function loadSchema(schemaPath) {
  let raw;
  try {
    raw = fs.readFileSync(schemaPath, "utf8");
  } catch (err) {
    throw new Error(`cannot read schema: ${schemaPath} (${err.message})`);
  }
  let schema;
  try {
    schema = JSON.parse(raw);
  } catch {
    throw new Error(`schema is not valid JSON: ${schemaPath}`);
  }
  if (!schema || typeof schema !== "object" || Array.isArray(schema)) {
    throw new Error("schema must be a JSON object of KEY to type");
  }
  return schema;
}

function exampleFromSchema(schema) {
  return `${Object.keys(schema).map((key) => `${key}=`).join("\n")}${Object.keys(schema).length ? "\n" : ""}`;
}

function checkEnv(schema, env = process.env, options = {}) {
  const errors = [];
  for (const [key, type] of Object.entries(schema)) {
    if (!isEnvType(type)) {
      errors.push({ key, reason: `unknown type ${type}` });
      continue;
    }
    if (!(key in env) || env[key] == null) {
      errors.push({ key, reason: "missing" });
      continue;
    }
    if (!validateValue(type, env[key])) errors.push({ key, reason: `expected ${type}` });
  }
  if (options.strict) {
    for (const key of Object.keys(env)) {
      if (!Object.prototype.hasOwnProperty.call(schema, key)) errors.push({ key, reason: "unexpected" });
    }
  }
  return { ok: errors.length === 0, errors };
}

function checkSchemaFile(schemaPath, env = process.env, options = {}) {
  return checkEnv(loadSchema(schemaPath), env, options);
}

function formatHuman(result) {
  if (result.ok) return "envshape: OK\n";
  const lines = ["envshape: FAIL"];
  for (const err of result.errors) lines.push(`  ${err.key}: ${err.reason}`);
  return `${lines.join("\n")}\n`;
}

export {
  PACKAGE,
  ENV_TYPES,
  TYPES,
  isEnvType,
  validateValue,
  parseDotenv,
  loadDotenvFile,
  loadSchema,
  exampleFromSchema,
  checkEnv,
  checkSchemaFile,
  formatHuman,
};
