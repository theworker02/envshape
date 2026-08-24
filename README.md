# envshape

<img src="docs/logo.svg" alt="envshape mark" width="96" height="96">

**Check process.env against { KEY: "string" | "number" | "bool" } and fail if anything is missing or the wrong type.**

![version 1.00](https://img.shields.io/badge/version-1.00-C9A227?labelColor=0B1F33)
![branch main](https://img.shields.io/badge/branch-main-0B1F33?labelColor=C9A227)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)
![release 1.00](https://img.shields.io/github/v/release/theworker02/envshape?display_name=release)

Package version **1.00** (`1.0.0`). Default branch is **`main`** — never `master`.

**Docs:** [GitHub Pages](https://theworker02.github.io/envshape/) · **Source:** [`theworker02/envshape`](https://github.com/theworker02/envshape) · **Release 1.00:** [`v1.0.0`](https://github.com/theworker02/envshape/releases/tag/v1.0.0)

## Why it exists

Broken deploys often start as a missing PORT or a string where a number was required. envshape is a preflight you can run before the process listens.

## Who it is for

Operators and app authors who want a zero-dependency env check in Docker entrypoints, Render start commands, or local scripts.

## Install

Requires Node.js 18 or newer. No extra npm dependencies.

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
npx --yes git+https://github.com/theworker02/envshape.git --help
node src/cli.js --help
```

## Quick start

```bash
printf '{ "PORT": "number", "NAME": "string" }\n' > schema.json
PORT=8080 NAME=api envshape schema.json
```

## CLI reference

Synopsis:

```text
envshape [options] <schema.json>
```

| Flag / argument | Meaning |
| --- | --- |
| `-h, --help` | Print detailed usage and exit 0. |
| `-v, --version` | Print 1.0.0 and exit 0. |
| `<schema.json>` | JSON object mapping env names to string, number, or bool. |

Print the same text locally:

```bash
envshape --help
envshape --version
```

Expected version output:

```text
1.0.0
```

## Configuration

Schema file only. Types: string (non-empty), number (finite Number()), bool (true/false/1/0). Extra env vars are ignored. Missing keys fail.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Every schema key is present and typed correctly. |
| `1` | Missing file, unknown type, missing key, or type mismatch. |

## Examples

### Success path

All keys present.

```bash
PORT=8080 NAME=api FLAG=true envshape schema.json
```

```json
{"ok":true,"errors":[]}
```

### Failure path

PORT is not numeric.

```bash
PORT=abc NAME=api envshape schema.json ; echo exit:$?
```

```json
{"ok":false,"errors":[{"key":"PORT","reason":"expected number"}]}
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
