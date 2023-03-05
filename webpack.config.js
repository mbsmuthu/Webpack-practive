const path =  require("path"); //to define absolute path
const TerserPlugin = require("terser-webpack-plugin"); //to minify bundle.js file

module.exports = {
    entry: './src/index.js', // source file
    output: {
        filename: 'bundle.js', // o/p file to be specified
        //path:'./dist', is an error bcoz u need to specify an absolute path
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/',
    },
    mode: "none", //none for default
    module: {
        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset',
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
                    'style-loader', 'css-loader' // order of array is important
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
            }
        ]
    },
    plugins: [
        new TerserPlugin() //to minify project
    ]
};