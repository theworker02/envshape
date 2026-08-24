#!/usr/bin/env node
const {
  checkSchemaFile,
  loadSchema,
  loadDotenvFile,
  exampleFromSchema,
  formatHuman,
} = require("./index.js");
const { HELP, VERSION } = require("./help.js");

function parseArgv(argv) {
  const flags = {};
  const positional = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--") {
      positional.push(...argv.slice(i + 1));
      break;
    }
    if (arg === "-h" || arg === "--help") {
      flags.help = true;
      continue;
    }
    if (arg === "-V" || arg === "-v" || arg === "--version") {
      flags.version = true;
      continue;
    }
    if (arg === "--json") {
      flags.json = true;
      continue;
    }
    if (arg === "--strict") {
      flags.strict = true;
      continue;
    }
    if (arg === "--example") {
      flags.example = true;
      continue;
    }
    if (arg === "--env") {
      const next = argv[i + 1];
      if (!next || next.startsWith("-")) throw new Error("option --env requires a path");
      flags.env = next;
      i += 1;
      continue;
    }
    if (arg.startsWith("--env=")) {
      flags.env = arg.slice("--env=".length);
      continue;
    }
    if (arg.startsWith("-")) throw new Error(`unknown option: ${arg}`);
    positional.push(arg);
  }
  return { flags, positional };
}

function fail(message) {
  process.stderr.write(`${message}\n`);
  process.exit(1);
}

try {
  const { flags, positional } = parseArgv(process.argv.slice(2));
  if (flags.help) {
    process.stdout.write(HELP);
    process.exit(0);
  }
  if (flags.version) {
    process.stdout.write(`${VERSION}\n`);
    process.exit(0);
  }

  const commands = new Set(["check", "example", "describe"]);
  const rest = [...positional];
  let command = "check";
  if (commands.has(rest[0])) command = rest.shift();
  if (flags.example) command = "example";
  const schemaPath = rest[0];
  if (!schemaPath) fail("usage: envshape [check|example|describe] [options] <schema.json>");

  const schema = loadSchema(schemaPath);

  if (command === "example") {
    process.stdout.write(exampleFromSchema(schema));
    process.exit(0);
  }

  if (command === "describe") {
    if (flags.json) {
      process.stdout.write(`${JSON.stringify(schema, null, 2)}\n`);
    } else {
      for (const [key, type] of Object.entries(schema)) {
        process.stdout.write(`${key}\t${type}\n`);
      }
    }
    process.exit(0);
  }

  if (flags.strict && !flags.env) {
    fail("--strict requires --env <file> so host environment keys are not treated as extras");
  }
  const env = flags.env ? loadDotenvFile(flags.env) : process.env;
  const result = checkSchemaFile(schemaPath, env, { strict: Boolean(flags.strict) });
  process.stdout.write(flags.json ? `${JSON.stringify(result)}\n` : formatHuman(result));
  process.exit(result.ok ? 0 : 1);
} catch (err) {
  fail(err.message);
}
