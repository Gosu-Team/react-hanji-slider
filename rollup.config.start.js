import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";
import sass from "rollup-plugin-sass";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      sourcemap: true,
      strict: false,
      banner: `"use client"`,
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: true }),
  ],
  external: ["react", "react-dom"],
};
