# envshape

<img src="docs/logo.svg" alt="envshape mark" width="96" height="96">

**Validate environment variables and dotenv files against a compact typed schema before your application starts.**

[![JSR](https://jsr.io/badges/@theworker02/envshape)](https://jsr.io/@theworker02/envshape)
![version 1.2.0](https://img.shields.io/badge/version-1.2.0-C9A227?labelColor=0B1F33)
![license MIT](https://img.shields.io/badge/license-MIT-0B1F33)
![node >=18](https://img.shields.io/badge/node-%3E%3D18-C9A227?labelColor=0B1F33)

**Package:** [`@theworker02/envshape`](https://jsr.io/@theworker02/envshape) · **Docs:** [GitHub Pages](https://theworker02.github.io/envshape/) · **Source:** [`theworker02/envshape`](https://github.com/theworker02/envshape)

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

- `checkEnv(schema, env, options)` — validate an environment object.
- `checkSchemaFile(path, env, options)` — load a JSON schema and validate in one call.
- `validateValue(type, value)` — validate one primitive value.
- `isEnvType(value)` — type guard for supported schema primitive names.

### Parsing and utilities

- `parseDotenv(text)` — parse dotenv-formatted text.
- `loadDotenvFile(path)` — read and parse a dotenv file.
- `loadSchema(path)` — read a JSON schema from disk.
- `exampleFromSchema(schema)` — create an empty dotenv template.
- `formatHuman(result)` — render terminal-friendly validation output.

### Symbols and types

- `PACKAGE` — package identity and version metadata.
- `ENV_TYPES` — supported primitive names.
- `TYPES` — primitive validator table.
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

[MIT](LICENSE) © 2026 theworker02
