const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

         name: "login",
         filename: "remoteEntry.js",
         exposes: {
             './LoginModule': './src/app/login/login.module.ts',
         },



        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
    });
