'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const knownRoutes = ['/', '/expertise', '/approche', '/a-propos', '/consultation', '/siieres-2026', '/mentions-legales'];
  const isSiieres = pathname === '/siieres-2026';
  const is404 = !knownRoutes.includes(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${isSiieres || is404 ? ' nav-dark' : ''}`} id="nav">
        <div className="wrap nav-inner">
          <Link href="/" className="nav-brand">
            <Image className="nav-logo" src="/logo_cased.png" alt="Logo CASED" width={64} height={64} style={{ height: 64, width: 'auto' }} />
            <span className="nav-name">CASED</span>
          </Link>
          <nav className="nav-links" aria-label="Navigation principale">
            <Link className={`nav-link${isActive('/expertise') ? ' active' : ''}`} href="/expertise">Expertise</Link>
            <Link className={`nav-link${isActive('/approche') ? ' active' : ''}`} href="/approche">Approche</Link>
            <Link className={`nav-link${isActive('/a-propos') ? ' active' : ''}`} href="/a-propos">À Propos</Link>
            <Link className={`nav-link${isActive('/consultation') ? ' active' : ''}`} href="/consultation">Contact</Link>
            <Link className={`nav-link ev-link${isActive('/siieres-2026') ? ' active' : ''}`} href="/siieres-2026">SIIERES 2026</Link>
          </nav>
          <Link className="nav-cta" href="/consultation">Consultation</Link>
          <button className="nav-ham" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
        <div className="mobile-drawer">
          <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Fermer">✕</button>
          <Link className={`mobile-link${isActive('/') ? ' active' : ''}`} href="/" onClick={() => setMenuOpen(false)}>Accueil</Link>
          <Link className={`mobile-link${isActive('/expertise') ? ' active' : ''}`} href="/expertise" onClick={() => setMenuOpen(false)}>Expertise</Link>
          <Link className={`mobile-link${isActive('/approche') ? ' active' : ''}`} href="/approche" onClick={() => setMenuOpen(false)}>Notre Approche</Link>
          <Link className={`mobile-link${isActive('/a-propos') ? ' active' : ''}`} href="/a-propos" onClick={() => setMenuOpen(false)}>À Propos</Link>
          <Link className={`mobile-link${isActive('/consultation') ? ' active' : ''}`} href="/consultation" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className="mobile-link" href="/siieres-2026" onClick={() => setMenuOpen(false)} style={{ color: 'var(--accent)', fontWeight: 700 }}>● SIIERES 2026</Link>
          <Link className="btn btn-primary btn-lg" href="/consultation" onClick={() => setMenuOpen(false)} style={{ marginTop: 16, justifyContent: 'center' }}>Consultation</Link>
        </div>
      </div>
    </>
  );
}
