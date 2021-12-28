{
    loader: 'sass-loader';
    options: {
      implementation: require('sass');
  
      webpackImporter: false;
      sassOptions: {
        includePaths: ['./node_modules']
      }
    }
  }