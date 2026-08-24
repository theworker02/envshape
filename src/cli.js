#!/usr/bin/env node
const { checkSchemaFile } = require("./index.js");

const schemaPath = process.argv[2];
if (!schemaPath) {
  process.stderr.write("usage: envshape <schema.json>\n");
  process.exit(1);
}
const result = checkSchemaFile(schemaPath);
process.stdout.write(`${JSON.stringify(result)}\n`);
process.exit(result.ok ? 0 : 1);
