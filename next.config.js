const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: config => {
    // Allows for absolute file path resolution
    config.resolve.modules.push(path.resolve("./"));

    return config;
  }
};
