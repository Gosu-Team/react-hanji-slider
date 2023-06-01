import serve from "rollup-plugin-serve";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

export default {
  input: "examples/App.js",
  output: [
    {
      file: "example-dist/bundle.js",
      format: "iife",
      sourcemap: true,
    },
  ],
  plugins: [
    image(),
    postcss({
      extract: true,
      extensions: [".css"],
    }),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      babelrc: false,
      presets: [
        [
          "@babel/preset-react",
          {
            runtime: "automatic",
          },
        ],
      ],
    }),
    commonjs(),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
    }),
    livereload({ watch: "example-dist" }),
  ],
};
