import { defineConfig } from "tsdown";

const dshExternals = [
  "@deepseek-ai/cordis",
  "@deepseek-ai/dsh-client-runtime",
  "@deepseek-ai/dsh-client-ui-conversation",
  "@deepseek-ai/dsh-client-ui-slots",
  "react",
  "react-dom",
];

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    outDir: "lib",
    format: ["esm"],
    dts: true,
    sourcemap: true,
    clean: true,
  },
  {
    entry: { client: "src/client/index.ts" },
    outDir: "lib",
    format: ["cjs"],
    platform: "browser",
    dts: true,
    sourcemap: true,
    clean: false,
    outExtensions: () => ({ js: ".js" }),
    external: dshExternals,
    banner: "var module = { exports: {} }; var exports = module.exports; window.__ModuleLoader__.load({ id: '@binle1988/dsh-gamify-edu', factory: (require) => {",
    footer: "return module.exports; } });",
  },
]);
