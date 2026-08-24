# envshape

<img src="docs/logo.svg" alt="envshape mark" width="96" height="96">

**Check process.env against { KEY: "string" | "number" | "bool" } and fail if anything is missing or the wrong type.**

![version 1.00](https://img.shields.io/badge/version-1.00-C9A227?labelColor=0B1F33)
![branch main](https://img.shields.io/badge/branch-main-0B1F33?labelColor=C9A227)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)
![release 1.00](https://img.shields.io/github/v/release/theworker02/envshape?display_name=release)
[![npm](https://img.shields.io/npm/v/@magnexis/envshape.svg)](https://www.npmjs.com/package/@magnexis/envshape)

Package version **1.00** (`1.0.0`). Default branch is **`main`** — never `master`.

**Docs:** [GitHub Pages](https://theworker02.github.io/envshape/) · **Source:** [`theworker02/envshape`](https://github.com/theworker02/envshape) · **Release 1.00:** [`v1.0.0`](https://github.com/theworker02/envshape/releases/tag/v1.0.0) · **npm:** [`@magnexis/envshape`](https://www.npmjs.com/package/@magnexis/envshape)

## Why it exists

Broken deploys often start as a missing PORT or a string where a number was required. envshape is a preflight you can run before the process listens.

## Who it is for

Operators and app authors who want a zero-dependency env check in Docker entrypoints, Render start commands, or local scripts.

## Install

Requires Node.js 18 or newer. No extra npm dependencies.

### Global install from npm

```bash
npm install -g @magnexis/envshape
envshape --help
```

Package page: https://www.npmjs.com/package/@magnexis/envshape

### Global install from GitHub

```bash
npm install -g git+https://github.com/theworker02/envshape.git
envshape --help
```

### Clone and link locally

```bash
git clone https://github.com/theworker02/envshape.git
cd envshape
npm install -g .
```

### Run without installing (npx / node)

```bash
npx --yes @magnexis/envshape --help
node src/cli.js --help
```

## Quick start

```bash
printf '{ "PORT": "number", "NAME": "string" }\n' > schema.json
PORT=8080 NAME=api envshape schema.json
```

## CLI reference

```text
envshape 1.00 (1.0.0)

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
```

Print the same text locally:

```bash
envshape --help
envshape -h
envshape --version
envshape -V
```

Expected version output:

```text
1.0.0
```

## Configuration

Schema is a JSON object of KEY to `string`, `number`, or `bool`. `--strict` requires `--env` so host environment keys are not treated as extras.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Schema matches, or example/describe succeeded. |
| `1` | Missing/mistyped keys, extra keys under --strict, or bad input. |

## Examples

### Success path

Validate a dotenv file against a schema.

```bash
envshape check --env .env schema.json
```

```text
envshape: OK
```

### Failure path

Extra keys fail under --strict.

```bash
envshape check --env .env --strict schema.json
```

```text
envshape: FAIL
  EXTRA: unexpected
```

Exit code is 1.

## How to run tests

No extra packages. From the repository root:

```bash
npm test
# same as:
node --test
```

All tests must pass before you open a pull request against `main`.

## GitHub Pages

This repository ships a product site in `/docs`.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Branch: **`main`**.
4. Folder: **`/docs`**.
5. Save, then wait for the Pages deployment.
6. Open [https://theworker02.github.io/envshape/](https://theworker02.github.io/envshape/).

Do not point Pages at `master`. The default branch is `main`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open pull requests against **`main`**.

## Security

See [SECURITY.md](SECURITY.md). Please report vulnerabilities privately.

## License

[MIT](LICENSE) © 2026 theworker02

## Funding

- GitHub Sponsors: [theworker02](https://github.com/sponsors/theworker02)
- thanks.dev: [https://thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)
