# Asset inventory â€” envshape

## Repository surfaces

| Asset | Location / notes |
|-------|------------------|
| Source tree | Repository root / language packages |
| Tests | `test/`, `tests/`, CI workflows if present |
| Docs | `README.md`, `docs/` |
| Diligence room | `docs/acquisition/` |
| License / notices | `LICENSE`, transition notices if present |
| Funding | `.github/FUNDING.yml` |
| CI | `.github/workflows/` if present |
| Branding | logos/assets folders if present |

## Capability highlights

- Typed `string`, `number`, and `bool` environment schemas.
- Dotenv parsing and schema-file loading.
- Strict mode for unexpected environment variables.
- Fully documented JSR API with explicit TypeScript declarations.
- Trusted publishing from GitHub Actions with provenance.
- Zero runtime dependencies.
- `checkEnv(schema, env, options)` Ã¢â‚¬â€ validate an environment object.
- `checkSchemaFile(path, env, options)` Ã¢â‚¬â€ load a JSON schema and validate in one call.
- `validateValue(type, value)` Ã¢â‚¬â€ validate one primitive value.
- `isEnvType(value)` Ã¢â‚¬â€ type guard for supported schema primitive names.
- `parseDotenv(text)` Ã¢â‚¬â€ parse dotenv-formatted text.
- `loadDotenvFile(path)` Ã¢â‚¬â€ read and parse a dotenv file.

## Usually excluded

Seller personal accounts, unrelated repos, and unreissued registry tokens â€” unless listed in the definitive agreement.

*Updated: 2026-09-22*
