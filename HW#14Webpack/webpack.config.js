const path = require('path');
//html plugin
const HTMLWebpackPlugin = require('html-webpack-plugin');
//usin for cleaning dist directory after compil
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//adding copy webpack plugin(uses for copying files)
const CopyWebpackPlugin = require('copy-webpack-plugin');

const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');

const TerserWebpackPlugin = require('terser-webpack-plugin');

//const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin');

//const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
//if production is dev = false
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all" //help us not to add modules two times
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetWebpackPlugin(),
            new TerserWebpackPlugin(),
        ]
    }

    return config;
}

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env'
            ]
        }
    }]



    return loaders
}



const filename = ext => {
    return isDev ? `[name].${ext}` : `[name].[has].${ext}`;
}

console.log('isDev', isDev);


const config = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
    	main:['@babel/polyfill','./index.js'],//adding babel polyfills (async and so on)
    },/*
    entry: {
        main: ['./index.js'],

    },*/
    externals: {
        axios: 'axios'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /*	resolve:{
    		extensions: ['.js','.json'],
    		alias: {
    			'@models':path.resolve(__dirname, 'src/models'),
    			'@':path.resolve(__dirname, 'src')
    		}
    	},*/
    optimization: optimization(),
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack Andrew',
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([{
                from: path.resolve(__dirname, 'src/styles/loading.gif'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/Clear.gif'),
                to: path.resolve(__dirname, 'dist')
            },
            {
                from: path.resolve(__dirname, 'src/favicon.ico'),
                to: path.resolve(__dirname, 'dist')
            }
        ])
    ],
    devServer: {
        port: 4200,
        hot: isDev
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //write inline styles
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            },
            { 
            	test: /\.js$/, 
            	exclude: /node_modules/, 
            	use: jsLoaders()
            }
        ]
    }

}


module.exports = config;