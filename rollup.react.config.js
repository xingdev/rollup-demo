import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import cjs from "rollup-plugin-commonjs";
import globals from "rollup-plugin-node-globals";
import postcss from "rollup-plugin-postcss";

module.exports = {
  input: "./rollupReactDemo/app.js",
  output: {
    file: "./rollupReactDemo/dist/bundle.js",
    format: "iife"
  },
  plugins: [postcss(), babel(), cjs(), globals(), resolve()]
};
