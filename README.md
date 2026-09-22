# envshape


---

## License & acquisition

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02).


<img src="docs/logo.svg" alt="envshape mark" width="96" height="96">

**Validate environment variables and dotenv files against a compact typed schema before your application starts.**

[![JSR](https://jsr.io/badges/@theworker02/envshape)](https://jsr.io/@theworker02/envshape)
![version 1.2.0](https://img.shields.io/badge/version-1.2.0-C9A227?labelColor=0B1F33)
![license MIT](https://img.shields.io/badge/license-Proprietary%20(source--available)-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)

**Package:** [`@theworker02/envshape`](https://jsr.io/@theworker02/envshape) Â· **Docs:** [GitHub Pages](https://theworker02.github.io/envshape/) Â· **Source:** [`theworker02/envshape`](https://github.com/theworker02/envshape)

## Highlights

- Typed `string`, `number`, and `bool` environment schemas.
- Dotenv parsing and schema-file loading.
- Strict mode for unexpected environment variables.
- Fully documented JSR API with explicit TypeScript declarations.
- Trusted publishing from GitHub Actions with provenance.
- Zero runtime dependencies.

## Add from JSR

```bash
deno add jsr:@theworker02/envshape
```

Then import the library API:

```ts
import { checkEnv, ENV_TYPES, PACKAGE } from "@theworker02/envshape";

const result = checkEnv(
  { PORT: "number", NAME: "string" },
  { PORT: "8080", NAME: "api" },
);

console.log(result.ok, ENV_TYPES, PACKAGE.version);
```

## Public API

### Validation

- `checkEnv(schema, env, options)` â€” validate an environment object.
- `checkSchemaFile(path, env, options)` â€” load a JSON schema and validate in one call.
- `validateValue(type, value)` â€” validate one primitive value.
- `isEnvType(value)` â€” type guard for supported schema primitive names.

### Parsing and utilities

- `parseDotenv(text)` â€” parse dotenv-formatted text.
- `loadDotenvFile(path)` â€” read and parse a dotenv file.
- `loadSchema(path)` â€” read a JSON schema from disk.
- `exampleFromSchema(schema)` â€” create an empty dotenv template.
- `formatHuman(result)` â€” render terminal-friendly validation output.

### Symbols and types

- `PACKAGE` â€” package identity and version metadata.
- `ENV_TYPES` â€” supported primitive names.
- `TYPES` â€” primitive validator table.
- `EnvType`, `EnvSchema`, `EnvCheckResult`, `EnvCheckOptions`, `EnvError`, `PackageMetadata`.

## CLI

The repository still ships the existing Node CLI for source checkouts:

```bash
git clone https://github.com/theworker02/envshape.git
cd envshape
node src/cli.js --help
```

Example:

```bash
printf '{ "PORT": "number", "NAME": "string" }\n' > schema.json
PORT=8080 NAME=api node src/cli.js schema.json
```

## Development

```bash
node --test
```

## Publishing

Releases are published to JSR through GitHub Actions using OIDC trusted publishing. The canonical package is `@theworker02/envshape`.

## Documentation

- [JSR package and generated API docs](https://jsr.io/@theworker02/envshape)
- [Project site](https://theworker02.github.io/envshape/)
- [Source repository](https://github.com/theworker02/envshape)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Open pull requests against `main`.

## Security

See [SECURITY.md](SECURITY.md).

## License

**Source-available proprietary** — evaluation under [LICENSE](./LICENSE); commercial / production use via [COMMERCIAL.md](./COMMERCIAL.md). See [LICENSE_TRANSITION_NOTICE.md](./LICENSE_TRANSITION_NOTICE.md) and [NOTICE](./NOTICE).
