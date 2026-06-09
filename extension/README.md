# Artis Login Enhancer

Extension Chrome/Edge qui modernise la page de login Artis.net.

## Fonctionnalités

- Arrière-plan animé (particules + orbes lumineux + grille subtile)
- Design glassmorphism sombre (card semi-transparente)
- Animations d'entrée fluides (fade + slide)
- Bouton afficher/masquer le mot de passe
- Effet ripple sur les boutons
- Inputs avec focus ring violet
- Responsive mobile

## Installation Chrome / Edge

1. Ouvrir `chrome://extensions` (ou `edge://extensions`)
2. Activer **Mode développeur** (coin supérieur droit)
3. Cliquer **Charger l'extension non empaquetée**
4. Sélectionner le dossier `extension/`
5. Se connecter sur `artis.digithall.org` → la page est automatiquement transformée

## Test local

Ouvrir `preview.html` directement dans le navigateur pour voir le résultat sans serveur.

## URLs ciblées

```
*://artis.digithall.org/*/composants/login/*
*://*.artis.fr/*/composants/login/*
*://*.artis.net/*/composants/login/*
```

Pour ajouter d'autres URLs, modifier `manifest.json` → `content_scripts[0].matches`.
