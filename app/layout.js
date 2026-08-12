import "./globals.css";
import PageLoader from "./components/PageLoader";

export const metadata = {
  title: "Shikaku — Où la stratégie rencontre la rapidité | Jeu Mobile Officiel",
  description: "Découvrez Shikaku, le jeu de stratégie en ligne sur grille de points. Affrontez l'IA, participez à des tournois mondiaux et défiez vos amis sur Android & iOS.",
  keywords: ["Shikaku", "Jeu de carrés", "Dots and Boxes", "Jeu de stratégie", "Multijoueur", "Tournois mobile"],
  openGraph: {
    title: "Shikaku — Jeu Mobile de Stratégie",
    description: "Affrontez l'IA, défiez vos amis et dominez le classement mondial !",
    images: ["/images/mascot/mascot.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Orbitron:wght@500;700;800;900&family=Rajdhani:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4500149809702229"
          crossorigin="anonymous"></script>
      </head>
      <body>
        <PageLoader />
        {children}
      </body>
    </html>
  );
}
