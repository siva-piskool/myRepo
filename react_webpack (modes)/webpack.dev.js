const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common,{
    mode:'development',
    devtool:'inline-sourece-map',
    devServer:{
        contentBase:'./dist'
    }
});