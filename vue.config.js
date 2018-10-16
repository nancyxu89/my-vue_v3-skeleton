/** @format */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const merge = require('lodash.merge')
const TARGET_NODE = process.env.WEBPACK_TARGET === 'skeleton'
const target = TARGET_NODE ? 'skeleton' : 'client'

const skeletonConfig = {
    entry: `./src/${target}.entry.js`,
    target: 'node',
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    optimization: {
        splitChunks: false
    },
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: [new VueSSRServerPlugin({
        filename: 'skeleton.json'
    })]
}
module.exports = {
    lintOnSave: false,
    configureWebpack: (config) => (TARGET_NODE?skeletonConfig:config),
    chainWebpack: config => {
        TARGET_NODE ?config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                merge(options, {
                    optimizeSSR: false
                })
            }):config
    }
}
