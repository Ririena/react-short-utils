const path = require('path');

module.exports = {
  entry: './src/index.js',  

  output: {
    path: path.resolve(__dirname, 'dist'),  
    filename: 'react-short-utils.js',  
    library: 'reactShortUtils',  
    libraryTarget: 'umd',  
    umdNamedDefine: true,  
    clean: true,  
  },

  resolve: {
    extensions: ['.js', '.jsx'],  
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  
        exclude: /node_modules/,  
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  externals: {
    react: 'react',  
  },

  devtool: 'source-map',  

  mode: 'production',  
};
