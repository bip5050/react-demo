
let envSetup   = '';
let env         = process.env.NODE_ENV;
if(env  === 'production')
  envSetup  = 'production';
else if (env === 'staging')
  envSetup  = 'development';
else
  envSetup  = 'none';


 
module.exports = env => {
  return {
    mode: envSetup,
    watch: true,
    devtool: 'inline-source-map',
    entry: ['core-js', './src/client/index.js'],
    /* entry: {
      main: ['./src/client/index.js']
    }, */
    output: {
      publicPath: '/dist/',
      filename: './[name].bundle.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          'sass-loader'
        ]
      }]
    }
  }
};
