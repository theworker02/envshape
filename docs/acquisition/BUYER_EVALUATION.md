# Buyer evaluation â€” envshape

## Goal

In 15â€“45 minutes, verify the Product builds or runs as documented and that proprietary notices are present.

## Steps

1. Confirm root `LICENSE` is proprietary and `ACQUISITION.md` exists.
2. Skim `README.md` install/run claims.
3. Execute:

```
```bash
deno add jsr:@theworker02/envshape
```
```ts
import { checkEnv, ENV_TYPES, PACKAGE } from "@theworker02/envshape";

const result = checkEnv(
  { PORT: "number", NAME: "string" },
  { PORT: "8080", NAME: "api" },
);

console.log(result.ok, ENV_TYPES, PACKAGE.version);
```
```bash
git clone https://github.com/theworker02/envshape.git
cd envshape
node src/cli.js --help
```
```bash
printf '{ "PORT": "number", "NAME": "string" }\n' > schema.json
PORT=8080 NAME=api node src/cli.js schema.json
```
```bash
node --test
```
```

4. Run tests if present (`npm test`, `pytest`, `cargo test`, `go test ./...`, etc.).
5. Record README vs observed behavior gaps in workpapers.

## Pass criteria

- [ ] Clone succeeds
- [ ] Documented happy path works **or** failure is explained
- [ ] Minimal path needs no surprise secrets
- [ ] License notices intact

*Updated: 2026-09-22*
