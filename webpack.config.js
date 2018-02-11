const path = require("path");
const NodeMon = require("nodemon-webpack-plugin");
const Flow = require("flow-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "bundle.js"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [
    new NodeMon({
      ignore: ["./node_modules/*"],
      watch: path.resolve("./src")
    }),
    new Flow({
      failOnError: true,
      failOnErrorWatch: true,
      callback: result => {
        console.log("Flow Compiled");
      }
    })
  ]
};
