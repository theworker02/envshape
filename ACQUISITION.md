# Acquisition Brief â€” envshape

**Date:** 2026-09-22  
**Repository:** https://github.com/theworker02/envshape  
**Default branch:** `main`  
**Primary language:** JavaScript  
**Status:** Diligence briefing only. **No acquisition has occurred** by virtue of this file.  
**License:** Proprietary â€” sale, written commercial license, or completed asset transfer required (see root `LICENSE`).  
**Valuation:** Not stated.  
**Contact:** GitHub [@theworker02](https://github.com/theworker02) Â· [thanks.dev/u/gh/theworker02](https://thanks.dev/u/gh/theworker02)

> Cloning or forking this repository does **not** grant production, redistribution, SaaS, OEM, or commercial rights.

---

## 1. Executive thesis

This project is **proprietary**. Production use, redistribution, and commercial deployment require a written commercial license or completed acquisition. See [LICENSE](./LICENSE) and [ACQUISITION.md](./ACQUISITION.md). Contact [@theworker02](https://github.com/theworker02). <img src="docs/logo.svg" alt="envshape mark" width="96" height="96"> **Validate environment variables and dotenv files against a compact typed schema before your application starts.**

**Why a buyer cares:** envshape packages transferable product IP â€” source, docs, in-repo brand assets, and a diligence room under `docs/acquisition/` â€” under a clear proprietary posture so diligence can proceed without mistaking the repo for open source.

---

## 2. Product snapshot

| Item | Detail |
|------|--------|
| Product | envshape |
| Repo | `theworker02/envshape` |
| Language | JavaScript |
| Open source? | **No** â€” proprietary |
| Rightsholder | theworker02 |
| Diligence pack | `docs/acquisition/` |

### Capability highlights (from current materials)

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

---

## 3. Problem / opportunity

Teams evaluating envshape typically need either (a) a commercial right to run or embed it, or (b) outright ownership of the Product IP for strategic build-out. Public GitHub visibility without a proprietary license creates false assumptions about free production use. This brief and the linked data room make the commercial path explicit.

---

## 4. What ships today

Honest maturity: treat repository contents, README claims, tests, and release tags as the source of truth. Do not assume production customers, ARR, filed patents, or SLAs unless separately evidenced in diligence.

Typical transferable surfaces:

- Source tree and build/test scripts present in-repo
- Documentation and design notes
- Acquisition / diligence markdown under `docs/acquisition/`
- Branding assets committed to the repository (if any)

---

## 5. Demo / evaluation path (buyer)

Minimal path (no secrets required unless README says otherwise):

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

Extended evaluation: `docs/acquisition/BUYER_EVALUATION.md`. Written NDA / evaluation grants may be required for private materials.

---

## 6. What a transaction typically includes

Subject to definitive schedules:

| Included (typical) | Excluded (typical) |
|--------------------|--------------------|
| Repo materials + asserted original IP | Seller personal accounts / unrelated repos |
| Docs + diligence room at closing | Third-party dependency source under separate licenses |
| In-repo brand marks as assigned | Secrets without rotation plan |
| Know-how captured in docs | Fabricated revenue, user, or adoption metrics |

---

## 7. Suggested deal structures

| Structure | When it fits |
|-----------|--------------|
| Non-exclusive commercial license | Deploy/run under seat or environment terms |
| Exclusive field-of-use license | Buyer wants exclusivity; seller may retain entity |
| Asset / IP assignment | Buyer wants ownership of Materials outright |
| OEM / redistribution | Separate agreement â€” not implied here |

Commercial terms (price, earnouts, escrow) are negotiated under NDA with counsel.

---

## 8. Buyer diligence checklist

- [ ] Confirm Rightsholder identity and authority to sell/license
- [ ] Inventory Materials (`docs/acquisition/ASSET_INVENTORY.md`)
- [ ] Review IP posture (`IP_PROVENANCE.md`) and dependencies (`DEPENDENCY_INVENTORY.md`)
- [ ] Run evaluation script (`BUYER_EVALUATION.md`)
- [ ] Review risks (`RISK_REGISTER.md`)
- [ ] Agree transfer scope (`TRANSFER_MANIFEST.md`) and handoff (`HANDOFF_CHECKLIST.md`)
- [ ] Supersede root `LICENSE` at closing via definitive agreement

---

## 9. Related documents

| Document | Purpose |
|----------|---------|
| `LICENSE` | Proprietary â€” no default grant |
| `docs/acquisition/README.md` | Data-room index |
| `docs/acquisition/EXECUTIVE_SUMMARY.md` | One-page thesis |
| `README.md` | Product overview |
| `SECURITY.md` | Vulnerability reporting |
| `COMMERCIAL.md` | Licensing contact path |
| `.github/FUNDING.yml` | Sponsors / thanks.dev |

---

## 10. Disclaimer

This package is informational and **does not** create a binding offer, grant of rights, or investment advice. Engage counsel for any transaction.

---

*Document version: 2.0.0 / 2026-09-22 Â· Classification: acquisition briefing*
