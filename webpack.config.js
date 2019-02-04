const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = {
  context: __dirname,
  entry: {
    SnappyGrid: './src/SnappyGrid'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  externals: {
    "react": {
      "commonjs": "react",
      "commonjs2": "react",
      "amd": "react",
      "root": "React"
    },
    "react-dom": {
      "commonjs": "react-dom",
      "commonjs2": "react-dom",
      "amd": "react-dom",
      "root": "ReactDOM"
    }
  },
}

const devConfig = merge( baseConfig, {
  devtool: 'source-map',
  output: {
    path: __dirname + "/build",
    filename: "snappy-grid-react.js",
    libraryTarget: "umd",
    library: "SnappyGridReact"
  }
})

const prodConfig = merge( baseConfig, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          compress: true,
          ecma: 5,
          mangle: true
        },
        sourceMap: false
      })
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "snappy-grid-react.min.js",
    libraryTarget: "umd",
    library: "SnappyGridReact"
  }
})

module.exports = ( env, argv ) => {
  if ( argv.mode === 'development' ) {
    return devConfig
  }

  return prodConfig
}