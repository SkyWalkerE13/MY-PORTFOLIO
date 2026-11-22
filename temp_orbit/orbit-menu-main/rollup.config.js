import { terser } from "rollup-plugin-terser";

export default {
  plugins: [terser()],
  input: "src/orbit-menu.js",
  output: [
    {
      file: "dist/orbit-menu.esm.js",
      format: "esm",
      sourcemap: true,
    },
    {
      file: "dist/orbit-menu.umd.js",
      format: "umd",
      name: "OrbitMenu",
      exports: 'named',
      sourcemap: true,
    },
  ],
};
