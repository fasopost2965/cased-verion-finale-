import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CASED — Cabinet Africain de Stratégie & d\'Expertise pour le Développement',
  description: 'CASED — Ingénierie de la souveraineté économique du Burkina Faso et de l\'AES. Think Tank + cabinet de conseil stratégique fondé en 2026.',
  openGraph: {
    title: 'CASED — Cabinet Africain de Stratégie',
    description: 'Ingénierie de la souveraineté économique du Burkina Faso et de l\'AES.',
    url: 'https://cased-bf.com',
    siteName: 'CASED',
    locale: 'fr_BF',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://cased-bf.com' },
  metadataBase: new URL('https://cased-bf.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
