import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "./03-evolution-ts/src/index.ts",
    output: {
      file: "./03-evolution-ts/dist/evolution.js",
      format: "umd",
      name: "app",
      esModule: false,
      sourcemap: true
    },
    plugins: [
      del({
        targets: ["./03-evolution-ts/dist/*"]
      }),
      copy({
        targets: [
          { src: "./03-evolution-ts/static/*", dest: "./03-evolution-ts/dist" }
        ]
      }),
      typescript({
        typescript: require("typescript")
      }),
      // peerDepsExternal(),
      resolve({
        jsnext: true
      }),
      commonjs({
        include: "node_modules/**"
      }),
      postcss({
        extract: false,
        modules: false,
        inject: false,
        minimize: true,
        plugins: []
      }),
      terser({
        output: {
          comments: false
        }
      })
    ]
  }
];
