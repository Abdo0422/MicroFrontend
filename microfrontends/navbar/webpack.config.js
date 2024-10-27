const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

         name: "navbar",
         filename: "remoteEntry.js",
         exposes: {
             './NavbarComponent': './src/app/navbar/navbar.component.ts',
         },



        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
    });
