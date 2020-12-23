const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
module.exports = {
    chainWebpack: (config) => {
        config.optimization.minimize(true);
        config.plugin("loadshReplace").use(new LodashModuleReplacementPlugin());
        config.plugin("webpack-bundle-analyzer").use(BundleAnalyzerPlugin);
    },
};
