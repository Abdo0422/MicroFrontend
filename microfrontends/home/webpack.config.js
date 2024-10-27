const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

         name: "home",
         filename: "remoteEntry.js",
         exposes: {
             './HomeModule': './src/app/home/home.module.ts',
         },



        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
    });
