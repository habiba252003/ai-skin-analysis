const path = require("path");
const { build } = require("esbuild");
const esbuildPluginPino = require("esbuild-plugin-pino");

const rootDir = __dirname;

build({
  entryPoints: [path.join(rootDir, "src", "index.ts")],
  outdir: path.join(rootDir, "dist"),
  entryNames: "[name]",
  outExtension: { ".js": ".cjs" },
  bundle: true,
  platform: "node",
  target: "node20",
  format: "cjs",
  sourcemap: true,
  plugins: [esbuildPluginPino()],
}).catch((err) => {
  console.error(err);
  process.exit(1);
});