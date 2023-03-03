const path =  require("path"); //to define absolute path

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
            }
        ]
    }
};