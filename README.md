#!/bin/bash

# Create README.md file
cat <<EOL > README.md
# Projet Microfrontend

## Vue d'ensemble

Cette application microfrontend se compose de deux espaces distincts : **Espace Particulier** et **Espace Pro**, construits avec Angular. L'application est axée sur la location de voitures.

## Prise en main

### Prérequis

- [Node.js](https://nodejs.org/) installé.
- Angular CLI :

  \`\`\`bash
  npm install -g @angular/cli
  \`\`\`

## Exécution de l'application

### Espace Particulier

1. **Ouvrez votre terminal et naviguez vers le dossier** :

   \`\`\`bash
   cd espace-particulier
   \`\`\`

2. **Lancez l'application** :

   \`\`\`bash
   ng serve --port 4201
   \`\`\`

3. **Accédez à l'application à l'adresse** : [http://localhost:4201](http://localhost:4201).

#### Fonctionnalités de l'Espace Particulier

- **Page d'accueil** : Interface conviviale pour explorer les voitures disponibles à la location.
- **Page de connexion** : Connexion sécurisée pour accéder au compte utilisateur.
- **Panier** : Gestion des réservations de voitures dans le panier.

---

### Espace Pro

1. **Ouvrez un nouveau terminal et naviguez vers le dossier** :

   \`\`\`bash
   cd espace-pro
   \`\`\`

2. **Lancez l'application** :

   \`\`\`bash
   ng serve --port 4200
   \`\`\`

3. **Accédez à l'application à l'adresse** : [http://localhost:4200](http://localhost:4200).

#### Fonctionnalités de l'Espace Pro

- **Section Employé** : Accès à un tableau de bord pour gérer les opérations liées aux réservations et aux clients.

## Licence

Ce projet est sous licence MIT.

## Remerciements

- **Angular** pour le développement d'applications web.
EOL

echo "README.md file has been created successfully."
