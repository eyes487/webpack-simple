const path = require('path')

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    resolveLoader: {
        modules: ['node_modules',"./myLoaders"]
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                use: [
                    "myLoader/index.js",  //loader顺序从后往前
                    {
                        loader: "myLoader2/index.js",
                        options: {
                            name: 'my name is two'
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "styleLoader/index.js","cssLoader/index.js","lessLoader/index.js",
                ]
            }
        ]
    }
}