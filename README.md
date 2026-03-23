# ShopHub - Site Web Personnel

Un site web personnel moderne et entierement modifiable.

## Comment Modifier le Site

Toute la configuration du site se trouve dans un seul fichier : **`js/config.js`**

Vous pouvez modifier facilement :

- **Informations personnelles** : nom, titre, email, telephone, localisation, photo
- **Reseaux sociaux** : GitHub, LinkedIn, Twitter, Instagram, Facebook
- **Couleurs du theme** : couleur principale, accent, arriere-plan
- **Section A Propos** : description, points forts
- **Competences** : categories, noms, niveaux de maitrise
- **Projets** : titre, description, image, tags, liens
- **Services** : icones, titres, descriptions
- **Contact** : titre, sous-titre, action du formulaire
- **Navigation** : logo, liens du menu

## Structure du Projet

```
ShopHub/
├── index.html          # Page principale
├── css/
│   └── style.css       # Styles du site
├── js/
│   ├── config.js       # Configuration modifiable
│   └── app.js          # Logique d'affichage
├── assets/
│   └── images/         # Vos images
└── README.md           # Ce fichier
```

## Deploiement

Ce site peut etre deploye sur :
- **GitHub Pages** : Activez GitHub Pages dans les parametres du repo
- **Netlify** : Connectez votre repo GitHub
- **Vercel** : Importez votre projet

Aucun outil de build n'est necessaire - le site fonctionne directement dans le navigateur.

## Technologies

- HTML5
- CSS3 (avec variables CSS pour le theming)
- JavaScript Vanilla (pas de framework)
- Font Awesome (icones)
- Google Fonts (Inter)
