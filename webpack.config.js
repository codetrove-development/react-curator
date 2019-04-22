const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const baseConfig = {
  context: __dirname,
  entry: {
    SnappyGrid: './src/Curator.jsx'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
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
    filename: "react-curator.js",
    libraryTarget: "umd",
    library: "Curator",
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
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
    filename: "react-curator.min.js",
    libraryTarget: "umd",
    library: "Curator",
    globalObject: "typeof self !== 'undefined' ? self : this"
  }
})

module.exports = ( env, argv ) => {
  if ( argv.mode === 'development' ) {
    return devConfig
  }

  return prodConfig
}