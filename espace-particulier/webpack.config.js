const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({

         name: "espaceParticulier",
         filename: "remoteEntry.js",
         exposes: {
             './HomeModule': './src/app/home/home.module.ts',
             './LoginComponent': './src/app/login/login.component.ts',
             './CartComponent': './src/app/cart/cart.component.ts',
         },



        shared: {
          ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
        },
    });
