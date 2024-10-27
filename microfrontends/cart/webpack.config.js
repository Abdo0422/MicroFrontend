const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

         name: "cart",
         filename: "remoteEntry.js",
         exposes: {
             './CartModule': './src/app/cart/cart.module.ts',
         },



        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
    });
