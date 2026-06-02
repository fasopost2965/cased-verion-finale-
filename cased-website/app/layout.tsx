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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
