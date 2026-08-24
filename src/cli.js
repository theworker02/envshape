#!/usr/bin/env node
const { checkSchemaFile } = require("./index.js");
const { HELP, VERSION } = require("./help.js");

const args = process.argv.slice(2);
if (args.includes("-h") || args.includes("--help")) {
  process.stdout.write(HELP);
  process.exit(0);
}
if (args.includes("-v") || args.includes("--version")) {
  process.stdout.write(`${VERSION}\n`);
  process.exit(0);
}

const schemaPath = args.find((a) => !a.startsWith("-"));
if (!schemaPath) {
  process.stderr.write("usage: envshape <schema.json>\n");
  process.exit(1);
}
try {
  const result = checkSchemaFile(schemaPath);
  process.stdout.write(`${JSON.stringify(result)}\n`);
  process.exit(result.ok ? 0 : 1);
} catch (err) {
  process.stderr.write(`${err.message}\n`);
  process.exit(1);
}
