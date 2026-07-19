# Shikaku — Site & Politique de confidentialité

Petit site Next.js contenant la page d'accueil et la politique de confidentialité
de l'application mobile **Shikaku**, destiné à être déployé sur Vercel pour
fournir une URL publique à Google Play Console.

## Avant de déployer

Ouvrez `app/privacy/page.js` et personnalisez :

- L'adresse e-mail de contact (`contact@example.com` → votre vraie adresse).
- La liste des données collectées si votre app évolue (nouveaux plugins,
  système de compte, publicité, etc.).
- La date de dernière mise à jour en bas de page.

## Lancer en local

```bash
npm install
npm run dev
```

Puis ouvrez http://localhost:3000

## Déployer sur Vercel

1. Poussez ce dossier sur un dépôt GitHub (public ou privé).
2. Allez sur https://vercel.com/new et importez le dépôt.
3. Laissez les réglages par défaut (Next.js est détecté automatiquement) et cliquez sur **Deploy**.
4. Une fois déployé, copiez l'URL fournie par Vercel, par exemple :
   `https://jeu-carre-privacy.vercel.app/privacy`
5. Collez cette URL (avec `/privacy` à la fin) dans le champ
   **"URL des règles de confidentialité"** de la Google Play Console.
