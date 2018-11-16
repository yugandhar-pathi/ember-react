'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    babel: {
        plugins: [
        'transform-class-properties',
        'transform-react-jsx',
        ]
      }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import({
    development: 'node_modules/react/umd/react.development.js',
    production: 'node_modules/react/umd/react.production.min.js'
  });
  
  app.import({
    development: 'node_modules/react-dom/umd/react-dom.development.js',
    production: 'node_modules/react-dom/umd/react-dom.production.min.js'
  });

  //import highcharts
  app.import( 'node_modules/highcharts/highcharts.js',{
    using : [ {
      transformation: 'amd',
      as : 'highcharts'
    }]
  });

  app.import( 'node_modules/redux/dist/redux.js',{
    using : [ {
      transformation: 'amd',
      as : 'redux'
    }]
  });

  app.import( 'node_modules/react-redux/dist/react-redux.js',{
    using : [ {
      transformation: 'amd',
      as : 'react-redux'
    }]
  });

  app.import( 'node_modules/highcharts-react-official/dist/highcharts-react.js',{
    using : [ {
      transformation: 'amd',
      as : 'highcharts-react-official'
    }]
  });
  //app.import('node_modules/highcharts-react-official/src/HighchartsReact.js');

  app.import('vendor/shims/react.js');
  app.import('vendor/shims/react-dom.js');

  //app.import('vendor/shims/highcharts-react.js');

  return app.toTree();
};
