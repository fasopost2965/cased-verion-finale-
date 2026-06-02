'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  useEffect(() => {
    const container = document.getElementById('nf-particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      const size = 2 + Math.random() * 4;
      p.style.cssText = `
        position:absolute;
        left:${Math.random() * 100}%;
        width:${size}px;height:${size}px;
        border-radius:50%;
        background:var(--accent);
        opacity:0;
        animation:nf-float-up linear ${6 + Math.random() * 10}s ${Math.random() * 8}s infinite;
      `;
      container.appendChild(p);
    }
  }, []);

  return (
    <>
      <style>{`
        @keyframes nf-float-up{0%{opacity:0;transform:translateY(100vh) scale(0)}10%{opacity:.6}90%{opacity:.2}100%{opacity:0;transform:translateY(-20px) scale(1.5)}}
        @keyframes nf-pulse-404{0%,100%{filter:brightness(1)}50%{filter:brightness(1.15)}}
        .nf-body{min-height:100svh;background:var(--navy-deep);color:var(--white);display:flex;flex-direction:column;overflow-x:hidden}
        .nf-bg{position:fixed;inset:0;z-index:0}
        .nf-bg-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,154,68,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(0,154,68,.05) 1px,transparent 1px);background-size:48px 48px}
        .nf-bg-glow1{position:absolute;top:-20%;left:-10%;width:60%;height:80%;background:radial-gradient(ellipse,rgba(0,154,68,.1) 0%,transparent 65%)}
        .nf-bg-glow2{position:absolute;bottom:-20%;right:-10%;width:50%;height:70%;background:radial-gradient(ellipse,rgba(26,43,75,.8) 0%,transparent 65%)}
        .nf-particles{position:absolute;inset:0;overflow:hidden;pointer-events:none}
        .nf-nav{position:relative;z-index:10;height:72px;display:flex;align-items:center;padding:0 clamp(20px,5vw,60px);border-bottom:1px solid rgba(255,255,255,.06)}
        .nf-nav-brand{display:flex;align-items:center;gap:14px;text-decoration:none}
        .nf-nav-name{font-size:18px;font-weight:800;color:var(--white);letter-spacing:-.04em}
        .nf-main{flex:1;display:flex;align-items:center;justify-content:center;position:relative;z-index:1;padding:40px clamp(20px,5vw,60px)}
        .nf-error-box{text-align:center;max-width:600px}
        .nf-error-code{font-size:clamp(100px,20vw,180px);font-weight:900;line-height:1;letter-spacing:-.06em;background:linear-gradient(135deg,rgba(255,255,255,.15) 0%,rgba(0,154,68,.3) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;user-select:none;animation:nf-pulse-404 3s ease-in-out infinite}
        .nf-error-icon{width:80px;height:80px;border-radius:50%;background:rgba(0,154,68,.12);border:1px solid rgba(0,154,68,.2);display:flex;align-items:center;justify-content:center;margin:24px auto}
        .nf-error-h{font-size:clamp(22px,3vw,32px);font-weight:700;color:var(--white);letter-spacing:-.025em;margin-bottom:12px}
        .nf-error-p{font-size:16px;color:rgba(255,255,255,.5);line-height:1.7;margin-bottom:36px;max-width:440px;margin-left:auto;margin-right:auto}
        .nf-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:48px}
        .nf-quick{border-top:1px solid rgba(255,255,255,.06);padding-top:32px}
        .nf-ql-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:16px}
        .nf-ql-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:480px;margin:0 auto}
        .nf-ql-item{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:8px;padding:16px;text-align:center;transition:all .2s;text-decoration:none;display:block}
        .nf-ql-item:hover{background:rgba(0,154,68,.1);border-color:rgba(0,154,68,.2);transform:translateY(-2px)}
        .nf-ql-icon{font-size:20px;color:var(--accent);margin-bottom:8px;display:block}
        .nf-ql-label{font-size:13px;font-weight:600;color:rgba(255,255,255,.6)}
        .nf-footer{position:relative;z-index:1;padding:20px clamp(20px,5vw,60px);border-top:1px solid rgba(255,255,255,.06);display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
        @media(max-width:480px){.nf-ql-grid{grid-template-columns:1fr 1fr}.nf-actions{flex-direction:column;align-items:center}.nf-footer{flex-direction:column;text-align:center}}
      `}</style>

      <div className="nf-body">
        <div className="nf-bg">
          <div className="nf-bg-grid" />
          <div className="nf-bg-glow1" />
          <div className="nf-bg-glow2" />
          <div className="nf-particles" id="nf-particles" />
        </div>

        <header className="nf-nav">
          <Link href="/" className="nf-nav-brand">
            <Image src="/logo_cased.png" alt="Logo CASED" width={56} height={56} style={{ height: 56, width: 'auto', objectFit: 'contain' }} />
            <span className="nf-nav-name">CASED</span>
          </Link>
        </header>

        <main className="nf-main">
          <div className="nf-error-box">
            <div className="nf-error-code">404</div>
            <div className="nf-error-icon">
              <span className="ms" style={{ fontSize: 36, color: 'var(--accent)' }}>search_off</span>
            </div>
            <h1 className="nf-error-h">Page introuvable</h1>
            <p className="nf-error-p">La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil ou explorez nos sections principales.</p>
            <div className="nf-actions">
              <Link className="btn btn-primary" href="/">
                <span className="ms" style={{ fontSize: 18 }}>home</span>
                Retour à l&apos;accueil
              </Link>
              <Link className="btn btn-ghost" href="/consultation">
                <span className="ms" style={{ fontSize: 18 }}>mail</span>
                Nous contacter
              </Link>
            </div>
            <div className="nf-quick">
              <div className="nf-ql-title">Pages principales</div>
              <div className="nf-ql-grid">
                <Link className="nf-ql-item" href="/expertise">
                  <span className="ms nf-ql-icon">hub</span>
                  <div className="nf-ql-label">Expertise</div>
                </Link>
                <Link className="nf-ql-item" href="/approche">
                  <span className="ms nf-ql-icon">psychology</span>
                  <div className="nf-ql-label">Approche</div>
                </Link>
                <Link className="nf-ql-item" href="/a-propos">
                  <span className="ms nf-ql-icon">corporate_fare</span>
                  <div className="nf-ql-label">À Propos</div>
                </Link>
                <Link className="nf-ql-item" href="/siieres-2026">
                  <span className="ms nf-ql-icon" style={{ color: '#FF8A9B' }}>event</span>
                  <div className="nf-ql-label">SIIERES 2026</div>
                </Link>
                <Link className="nf-ql-item" href="/consultation">
                  <span className="ms nf-ql-icon">send</span>
                  <div className="nf-ql-label">Consultation</div>
                </Link>
                <Link className="nf-ql-item" href="/mentions-legales">
                  <span className="ms nf-ql-icon">gavel</span>
                  <div className="nf-ql-label">Légal</div>
                </Link>
              </div>
            </div>
          </div>
        </main>

        <footer className="nf-footer">
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,.25)' }}>© 2026 CASED — Cabinet Africain de Stratégie &amp; d&apos;Expertise pour le Développement</p>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,.2)' }}>Design by <a href="tel:+212777346787" style={{ color: 'rgba(255,255,255,.35)' }}>FASOPOT DIGITAL</a> — +212 777 346 787</div>
        </footer>
      </div>
    </>
  );
}
