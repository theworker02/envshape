/** Supported environment schema primitive types. */
export type EnvType = "string" | "number" | "bool";

/** Schema mapping environment variable names to expected primitive types. */
export type EnvSchema = Record<string, EnvType>;

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
  /** Validation failures, empty when {@link ok} is true. */
  errors: EnvError[];
}

/** Validation options for environment checks. */
export interface EnvCheckOptions {
  /** Reject environment variables that are not present in the schema. */
  strict?: boolean;
}

/** Primitive validators used internally by envshape and exposed for advanced callers. */
export const TYPES: Readonly<Record<EnvType, (value: string) => boolean>>;

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
