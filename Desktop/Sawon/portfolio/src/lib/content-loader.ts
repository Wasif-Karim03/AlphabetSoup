import { readFileSync } from "fs";
import { join } from "path";
import { z } from "zod";

/**
 * Load and validate JSON content files at runtime in server components
 * @param filename - The JSON filename (with or without .json extension)
 * @param schema - The Zod schema to validate against
 * @returns The validated and typed content
 */
export function loadContent<T>(
  filename: string,
  schema: z.ZodSchema<T>
): T {
  try {
    // Ensure filename has .json extension
    const filePath = filename.endsWith(".json")
      ? join(process.cwd(), "src", "content", filename)
      : join(process.cwd(), "src", "content", `${filename}.json`);

    // Read the JSON file
    const fileContents = readFileSync(filePath, "utf-8");
    const rawData = JSON.parse(fileContents);

    // Validate and parse with Zod
    const validatedData = schema.parse(rawData);

    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error(`Validation error for ${filename}:`, error.format());
      throw new Error(`Invalid content in ${filename}: ${error.message}`);
    }
    if (error instanceof SyntaxError) {
      throw new Error(`Invalid JSON in ${filename}: ${error.message}`);
    }
    throw new Error(`Failed to load ${filename}: ${error}`);
  }
}

/**
 * Safe content loader that returns null on error (useful for optional content)
 */
export function loadContentSafe<T>(
  filename: string,
  schema: z.ZodSchema<T>
): T | null {
  try {
    return loadContent(filename, schema);
  } catch (error) {
    console.error(`Failed to load ${filename}:`, error);
    return null;
  }
}

