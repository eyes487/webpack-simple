/**
 * author: eyes487
 * 执行webpack构建的入口
 * 1. 拿到webpack.config.js配置
 * 2. 拿到webpack，实例化
 */
const options = require('./webpack.config.js')
const webpack = require('./lib/webpack.js')

new webpack(options).run()