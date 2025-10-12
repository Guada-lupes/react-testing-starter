import { defineConfig } from "vitest/config";

export default defineConfig({
  //con globals evitamos tener que importa en cada archivo it, expect, describe. Pero debemos añadir "types": ["vitest/globals"] en tsconfig.json
  test: { environment: "jsdom", setupFiles: ["test/setup.ts"], globals: true },
});
