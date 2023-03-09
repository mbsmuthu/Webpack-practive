const path =  require("path"); // to define absolute path
const TerserPlugin = require("terser-webpack-plugin"); // to minify bundle.js file
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const handlebarsLoader = require("handlebars-loader");

module.exports = {
    entry: './src/index.js', // source file
    output: {
        filename: 'bundle.js', // o/p file to be specified. [contenthash] to generate new file for every change
        //path:'./dist', is an error bcoz u need to specify an absolute path
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: "development", //none for default
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
    }
    },
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset',
                use: [
                    'file-loader'
                ]
                //asset/resource - creates a new file in the o/p directory & exports the url of the file - for bigger files
                //asset/inline - creates a base 64 format file(which takes quite a huge space) and injects the base 64 string directly into the main file - for smaller files
                //asset - general - webpack decides whether to use it as resource or inline type based on the condition below(default 8kb)
                // parse: {
                //     dataUrlCondition: {
                //         maxSize: 3 * 1024 //3kb
                //     }
                // }
                //asset/source - webpack uses the content of the file and converts it into a JS string - mainly to use string variable
            },
            {
                test: /\.css$/, // or /\.scss$/ and 'sass-loader' in the last for scss files
                use: [
                    'style-loader', 'css-loader' // order of array is important & minicssextractplugin replaces style-loader
                ]
            },
            {
                test: /\.js$/, // all js files except node_modules
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader', //to support features even in older browsers(ecma script)
                    options: {
                        presets: [ '@babel/env' ],
                    }
                }
            },
            {
                test:/\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new TerserPlugin(), //to minify project
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.hbs',
        })
    ]
};