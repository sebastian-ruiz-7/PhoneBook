const path=require('path');
const HTMLWebpaclPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

module.exports={
    entry: './src/client/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/'
    },
    mode:'development',
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@assets':path.resolve(__dirname,'src/client/assets'),
            '@components':path.resolve(__dirname,'src/client/components'),
            '@containers':path.resolve(__dirname,'src/client/containers'),
            '@context':path.resolve(__dirname,'src/client/context'),
            '@hooks':path.resolve(__dirname,'src/client/hooks'),
            '@pages':path.resolve(__dirname,'src/client/pages'),
            '@routes':path.resolve(__dirname,'src/client/routes'),
            '@styles':path.resolve(__dirname,'src/client/styles'),
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:[/node_modules/,'/src/api'],
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test:/\.html$/,
                use:{
                    loader:'html-loader'
                }
            },
            {
                test:/\.(css)$/,
                use:[
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.(jpg|svg|png|gif)$/,
                type:'asset'
            }
        ]
    },
    plugins:[
        new HTMLWebpaclPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer:{
        static:{
            directory: path.join(__dirname,'dist'),
        },
        port:3005,
        compress:true,
        historyApiFallback:true
    }
}