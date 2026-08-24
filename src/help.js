const HELP = `envshape 1.00 (1.0.0)

Usage:
  envshape check [options] <schema.json>
  envshape example <schema.json>
  envshape describe <schema.json>
  envshape [options] <schema.json>

Validate an environment against a JSON object of KEY -> type.
Types: string (non-empty), number (finite), bool (true/false/1/0).

Subcommands:
  check              Validate env against the schema (default)
  example            Print a KEY= template for every schema key
  describe           Print each key and its expected type

Options:
  -h, --help         Show this help and exit 0
  -V, -v, --version  Print 1.0.0 and exit 0
  --json             JSON result (check) or JSON schema dump (describe)
  --env <file>       Load a simple KEY=VAL dotenv file instead of process.env
  --strict           Fail when the env contains keys not listed in the schema
  --example          Same as the example subcommand

Exit codes:
  0  schema matches (or example/describe succeeded)
  1  missing/mistyped keys, extra keys under --strict, or bad input

Examples:
  envshape schema.json
  envshape check --env .env --strict schema.json
  envshape example schema.json
  PORT=8080 NAME=app envshape ./env.schema.json
`;

const VERSION = "1.0.0";
module.exports = { HELP, VERSION };
