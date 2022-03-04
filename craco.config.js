const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: {
              // '@primary-color': '#FF4581',
              // '@card-head-background': '#FF4581',
            }
          },
        },
      },
    },
  ],
};
