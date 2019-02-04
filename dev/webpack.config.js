const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: './index',
    module: {
        rules: [{
            test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/react']
        }
      }
    ],
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                {
                    loader: "css-loader"
                }
            ]
        }]
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        libraryTarget: "umd",
        library: "SnappyGridReactDev"
    },
    plugins: [ 
        new HtmlWebPackPlugin({
            template: "./index.html",
            filename: "index.html"
        })
    ]
};

