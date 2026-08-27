/**
 * Validate environment variables and dotenv files against a compact typed schema.
 *
 * @module
 */

/** Supported primitive types in an envshape schema. */
export type EnvType = "string" | "number" | "bool";

/** Schema mapping environment variable names to expected primitive types. */
export type EnvSchema = Record<string, EnvType>;

/** Read-only package metadata exposed by envshape. */
export interface PackageMetadata {
  /** JSR package name. */
  readonly name: "@theworker02/envshape";
  /** Current package version. */
  readonly version: "1.2.0";
  /** Primary runtime family. */
  readonly runtime: "node";
  /** Canonical package registry. */
  readonly registry: "jsr";
}

/** A single environment validation failure. */
export interface EnvError {
  /** Environment variable name. */
  key: string;
  /** Human-readable reason the variable failed validation. */
  reason: string;
}

/** Result produced by environment validation. */
export interface EnvCheckResult {
  /** Whether the environment satisfies the schema. */
  ok: boolean;
  /** Validation failures, empty when validation succeeds. */
  errors: EnvError[];
}

/** Validation options for environment checks. */
export interface EnvCheckOptions {
  /** Reject environment variables that are not present in the schema. */
  strict?: boolean;
}

/** Package identity and release metadata. */
export const PACKAGE: PackageMetadata;

/** Ordered list of schema primitive names supported by envshape. */
export const ENV_TYPES: readonly EnvType[];

/** Primitive validators used by envshape and exposed for advanced callers. */
export const TYPES: Readonly<Record<EnvType, (value: string) => boolean>>;

/** Return whether an unknown value names a supported envshape primitive type. */
export function isEnvType(type: unknown): type is EnvType;

/** Validate one value against an envshape primitive type. */
export function validateValue(type: EnvType | string, value: unknown): boolean;

/** Parse dotenv-formatted text into key/value pairs. */
export function parseDotenv(text: string): Record<string, string>;

/** Read and parse a dotenv file from disk. */
export function loadDotenvFile(filePath: string): Record<string, string>;

/** Read and validate a JSON environment schema file. */
export function loadSchema(schemaPath: string): EnvSchema;

/** Generate an empty dotenv example from a schema. */
export function exampleFromSchema(schema: EnvSchema): string;

/** Validate an environment object against a schema. */
export function checkEnv(schema: EnvSchema, env?: Record<string, string | undefined>, options?: EnvCheckOptions): EnvCheckResult;

/** Load a schema file and validate an environment object against it. */
export function checkSchemaFile(schemaPath: string, env?: Record<string, string | undefined>, options?: EnvCheckOptions): EnvCheckResult;

/** Format a validation result for terminal output. */
export function formatHuman(result: EnvCheckResult): string;
