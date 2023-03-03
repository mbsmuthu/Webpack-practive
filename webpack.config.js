const path =  require("path"); //to define absolute path

module.exports = {
    entry: './src/index.js', // source file
    output: {
        filename:'bundle.js', // o/p file to be specified
        //path:'./dist', is an error bcoz u need to specify an absolute path
        path:path.resolve(__dirname, './dist'),
    },
    mode: "none", //none for default
};