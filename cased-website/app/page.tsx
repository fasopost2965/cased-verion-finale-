import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';
import HomeContactForm from '@/components/HomeContactForm';

export const metadata: Metadata = {
  title: 'CASED — Ingénierie de la Souveraineté Économique du Burkina Faso & de l\'AES',
  description: 'Cabinet Africain de Stratégie & d\'Expertise pour le Développement. Nous propulsons une vision endogène de la croissance, alliant rigueur technique et patriotisme stratégique.',
};

export default function HomePage() {
  return (
    <>
      <style>{`
        .hero{padding-top:76px;min-height:100svh;background:var(--navy-deep);position:relative;overflow:hidden;display:flex;align-items:center}
        .hero-dots{position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.22) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
        .hero-glow{position:absolute;top:-10%;right:-5%;width:55%;height:120%;background:radial-gradient(ellipse,rgba(26,43,75,.9) 10%,transparent 70%);pointer-events:none}
        .hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center;padding-top:var(--sy);padding-bottom:var(--sy)}
        .hero-eyebrow{margin-bottom:22px}
        .hero-h1{font-size:clamp(36px,4.5vw,58px);font-weight:800;line-height:1.07;letter-spacing:-.035em;color:var(--white);margin-bottom:22px}
        .hero-h1 .gold{color:var(--accent)}
        .hero-desc{font-size:17px;line-height:1.72;color:rgba(255,255,255,.6);max-width:460px;margin-bottom:36px}
        .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
        .hero-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-xl);padding:40px;backdrop-filter:blur(8px)}
        .hero-quote{font-size:16px;font-style:italic;line-height:1.7;color:rgba(255,255,255,.75);margin-bottom:32px;padding-left:18px;border-left:3px solid var(--accent)}
        .hero-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .hstat{background:rgba(255,255,255,.055);border:1px solid rgba(255,255,255,.08);border-radius:var(--r-md);padding:22px 20px}
        .hstat-num{font-size:clamp(22px,2.5vw,30px);font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1;margin-bottom:5px}
        .hstat-label{font-size:10px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em}
        .hstat.span2{grid-column:1/-1;display:flex;align-items:center;gap:14px;background:linear-gradient(135deg,rgba(0,154,68,.14),rgba(197,160,89,.04));border-color:rgba(0,154,68,.22)}
        .hstat.span2 .icon{width:42px;height:42px;border-radius:50%;background:rgba(0,154,68,.18);display:flex;align-items:center;justify-content:center;color:var(--accent);flex-shrink:0}
        .hstat.span2 .icon .ms{font-size:20px}
        .trust{background:var(--white);border-bottom:1px solid var(--border);padding:15px 0}
        .trust-inner{display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .trust-item{display:flex;align-items:center;gap:7px;font-size:12px;font-weight:600;color:var(--muted);letter-spacing:.02em}
        .trust-sep{width:1px;height:18px;background:var(--border)}
        .trust-legal{display:inline-flex;align-items:center;gap:8px;padding:4px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);font-size:10px;font-weight:700;color:var(--dim);letter-spacing:.08em;text-transform:uppercase}
        .vision{background:var(--white);text-align:center}
        .vision-label{display:block;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:20px}
        .vision-text{font-size:clamp(20px,2.6vw,28px);font-weight:600;line-height:1.5;color:var(--navy);max-width:840px;margin:0 auto}
        .vision-text .gold{color:var(--accent)}
        .expertise{background:var(--surface)}
        .bento{display:grid;grid-template-columns:repeat(12,1fr);gap:var(--gap)}
        .bc{border-radius:var(--r-lg);padding:40px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease;position:relative;overflow:hidden}
        .bc:hover{transform:translateY(-3px);box-shadow:var(--sh-lg)}
        .bc-mines{grid-column:1/9;background:var(--white);border:1px solid var(--border)}.bc-mines:hover{border-color:var(--accent)}
        .bc-env{grid-column:9/13;background:var(--green);color:var(--white)}
        .bc-energy{grid-column:1/5;background:var(--navy);color:var(--white)}
        .bc-validity{grid-column:5/13;background:var(--white);border:1px solid var(--border)}.bc-validity:hover{border-color:rgba(26,43,75,.4)}
        .bcard-icon{width:48px;height:48px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;margin-bottom:22px;flex-shrink:0}
        .bcard-icon .ms{font-size:24px}
        .icon-navy{background:var(--navy);color:var(--white)}
        .icon-accent{background:var(--accent);color:var(--white)}
        .icon-w20{background:rgba(255,255,255,.18);color:var(--white)}
        .bcard-title{font-size:22px;font-weight:700;letter-spacing:-.02em;line-height:1.25;margin-bottom:12px}
        .bcard-body{font-size:15px;line-height:1.65;color:var(--muted)}
        .bcard-body-w{font-size:15px;line-height:1.65;color:rgba(255,255,255,.65)}
        .bcard-cta{display:inline-flex;align-items:center;gap:6px;margin-top:26px;font-size:14px;font-weight:600;color:var(--accent);transition:gap .2s}.bcard-cta:hover{gap:12px}
        .bcard-cta-w{color:rgba(255,255,255,.6)}.bcard-cta-w:hover{color:var(--white)}
        .mines-inner{display:grid;grid-template-columns:1fr auto;gap:32px;height:100%}
        .img-ph{border-radius:var(--r-md);background:linear-gradient(135deg,var(--surface2),var(--border));position:relative;overflow:hidden}
        .img-ph::after{content:attr(data-label);position:absolute;bottom:12px;left:0;right:0;text-align:center;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
        .img-ph::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(0,0,0,.03) 0,rgba(0,0,0,.03) 1px,transparent 1px,transparent 12px)}
        .mines-img{width:200px;height:100%;min-height:160px}
        .chips{display:flex;gap:8px;flex-wrap:wrap;margin-top:22px}
        .chip{padding:4px 12px;border:1px solid var(--border);border-radius:var(--r);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--navy);background:var(--surface)}
        .sentiers{background:var(--navy)}
        .sentiers-head{text-align:center;margin-bottom:60px}
        .sentiers-head h2{font-size:clamp(26px,3.2vw,36px);font-weight:700;color:var(--white);letter-spacing:-.025em}
        .sentiers-head p{color:rgba(255,255,255,.45);font-size:16px;margin-top:10px}
        .sentiers-grid{display:grid;grid-template-columns:repeat(3,1fr);background:rgba(255,255,255,.07);border-radius:var(--r-lg);overflow:hidden;gap:1px}
        .sitem{background:var(--navy);padding:48px 40px;transition:background .25s}.sitem:hover{background:rgba(255,255,255,.04)}
        .snum{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;margin-bottom:20px}
        .s-accent{color:var(--accent)}.s-green{color:#5CB85C}.s-dim{color:rgba(255,255,255,.3)}
        .sitem h3{font-size:22px;font-weight:700;color:var(--white);line-height:1.3;margin-bottom:14px}
        .sitem p{font-size:15px;color:rgba(255,255,255,.45);line-height:1.65}
        .method{background:var(--white)}
        .method-inner{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start}
        .method-list{display:flex;flex-direction:column;gap:36px}
        .mitem{display:flex;gap:20px;align-items:flex-start}
        .micon{width:48px;height:48px;border-radius:50%;background:var(--surface2);border:1px solid var(--border);display:flex;align-items:center;justify-content:center;color:var(--green);flex-shrink:0}
        .micon .ms{font-size:22px}
        .mitem-title{font-size:17px;font-weight:700;color:var(--navy);margin-bottom:7px}
        .mitem-body{font-size:15px;color:var(--muted);line-height:1.65}
        .cycle{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:40px}
        .cycle-title{font-size:17px;font-weight:700;color:var(--navy);text-align:center;margin-bottom:36px}
        .cycle-steps{position:relative;display:flex;flex-direction:column;gap:0}
        .cycle-steps::before{content:'';position:absolute;left:16px;top:8px;bottom:8px;width:1px;background:var(--border)}
        .cstep{display:flex;align-items:flex-start;gap:20px;padding-bottom:28px;position:relative}
        .cstep:last-child{padding-bottom:0}
        .cstep-num{width:33px;height:33px;border-radius:50%;background:var(--white);border:2px solid var(--border);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;color:var(--navy);flex-shrink:0;position:relative;z-index:1}
        .cstep:last-child .cstep-num{background:var(--accent);border-color:var(--accent);color:var(--white)}
        .cstep-text{font-size:15px;font-weight:600;color:var(--navy);padding-top:6px;line-height:1.3}
        .av-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-lg);padding:32px;transition:transform .25s ease,box-shadow .25s ease}
        .av-card:hover{transform:translateY(-3px);box-shadow:var(--sh-lg)}
        .av-icon{width:44px;height:44px;border-radius:var(--r-md);background:rgba(0,154,68,.1);display:flex;align-items:center;justify-content:center;margin-bottom:16px}
        .av-icon .ms{font-size:22px;color:var(--accent)}
        .av-title{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:10px}
        .av-body{font-size:15px;color:var(--muted);line-height:1.65}
        .aes{background:var(--surface)}
        .aes-inner{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
        .aes-body{font-size:17px;line-height:1.72;color:var(--muted);margin-bottom:32px}
        .pnd-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-xl);padding:36px;box-shadow:var(--sh-sm)}
        .pnd-header{display:flex;align-items:flex-start;gap:16px;margin-bottom:20px}
        .pnd-bar{width:4px;height:52px;background:var(--accent);border-radius:2px;flex-shrink:0}
        .pnd-name{font-size:17px;font-weight:800;color:var(--navy)}
        .pnd-value{font-size:14px;font-weight:600;color:var(--accent);margin-top:4px}
        .pnd-quote{font-size:15px;font-style:italic;color:var(--muted);line-height:1.65;border-top:1px solid var(--border);padding-top:18px;margin-top:4px}
        .pnd-attr{font-size:12px;font-weight:600;color:var(--navy);margin-top:10px;font-style:normal;display:flex;align-items:center;gap:6px}
        .pnd-attr .ms{font-size:15px;color:var(--accent)}
        .aes-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .ast{border-radius:var(--r-lg);padding:32px 26px;text-align:center}
        .ast-navy{background:var(--navy)}.ast-white{background:var(--white);border:1px solid var(--border)}.ast-green{background:var(--green)}
        .ast-num{font-size:42px;font-weight:800;letter-spacing:-.04em;line-height:1;margin-bottom:8px}
        .ast-lbl{font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase}
        .ast-navy .ast-num{color:var(--accent)}.ast-navy .ast-lbl{color:rgba(255,255,255,.9)}
        .ast-white .ast-num{color:var(--navy)}.ast-white .ast-lbl{color:var(--muted)}
        .ast-green .ast-num{color:#D4F7E0}.ast-green .ast-lbl{color:rgba(255,255,255,.9)}
        .aes-map{grid-column:1/-1;height:190px;border-radius:var(--r-lg);background:rgba(45,90,39,.07);border:1px solid rgba(45,90,39,.15);display:flex;align-items:center;justify-content:center}
        .contact{background:var(--white)}
        .contact-card{background:var(--navy-deep);border-radius:var(--r-xl);padding:clamp(40px,6vw,72px);display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start;position:relative;overflow:hidden}
        .contact-card::before{content:'';position:absolute;top:-30%;right:-10%;width:55%;height:160%;background:radial-gradient(ellipse,rgba(0,154,68,.09) 0%,transparent 65%);pointer-events:none}
        .contact-left{position:relative;z-index:1}
        .contact-h{font-size:clamp(22px,2.8vw,32px);font-weight:700;color:var(--white);letter-spacing:-.025em;line-height:1.25;margin-bottom:16px}
        .contact-desc{font-size:16px;color:rgba(255,255,255,.5);line-height:1.72;margin-bottom:36px}
        .cinfo{display:flex;flex-direction:column;gap:18px}
        .cinfo-item{display:flex;align-items:center;gap:14px;font-size:15px;color:rgba(255,255,255,.7)}
        .cinfo-item .ms{font-size:20px;color:var(--accent)}
        .form-card{background:var(--white);border-radius:var(--r-lg);padding:36px;position:relative;z-index:1}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
        .fg{margin-bottom:14px}
        .flabel{display:block;font-size:11px;font-weight:700;color:var(--navy);letter-spacing:.06em;text-transform:uppercase;margin-bottom:7px}
        .fsubmit{width:100%;padding:15px;background:var(--accent);color:var(--white);border-radius:var(--r);font-family:var(--font);font-size:15px;font-weight:700;cursor:pointer;transition:all .2s;margin-top:6px;border:none}
        .fsubmit:hover{background:var(--accent-dk);transform:translateY(-1px);box-shadow:0 8px 24px rgba(0,154,68,.3)}
        @media(max-width:1024px){.hero-inner{grid-template-columns:1fr}.hero-card{display:none}.method-inner{grid-template-columns:1fr;gap:48px}.aes-inner{grid-template-columns:1fr;gap:48px}.contact-card{grid-template-columns:1fr;gap:36px}}
        @media(max-width:768px){.bento{grid-template-columns:1fr}.bc-mines,.bc-env,.bc-energy,.bc-validity{grid-column:1/-1}.mines-inner{grid-template-columns:1fr}.mines-img{width:100%;height:160px;min-height:unset}.sentiers-grid{grid-template-columns:1fr}.form-row{grid-template-columns:1fr}.aes-stats{grid-template-columns:1fr 1fr}.trust-sep{display:none}}
        @media(max-width:640px){#av-grid{grid-template-columns:repeat(2,1fr) !important}}
        @media(max-width:480px){.hero-actions{flex-direction:column}.aes-stats{grid-template-columns:1fr}#av-grid{grid-template-columns:1fr !important}}
      `}</style>

      <ScrollReveal />

      {/* HERO */}
      <section className="hero" id="accueil">
        <div className="hero-dots"></div>
        <div className="hero-glow"></div>
        <div className="wrap hero-inner">
          <div>
            <div className="hero-eyebrow">
              <span className="badge badge-green">
                <span className="ms" style={{ fontSize: '14px' }}>verified_user</span>
                Souveraineté &amp; Développement
              </span>
            </div>
            <h1 className="hero-h1">
              Ingénierie de la<br />
              <span className="gold">Souveraineté Économique</span><br />
              du Burkina Faso &amp; de l&apos;AES
            </h1>
            <p className="hero-desc">
              Cabinet Africain de Stratégie &amp; d&apos;Expertise pour le Développement. Nous propulsons une vision endogène de la croissance, alliant rigueur technique et patriotisme stratégique pour transformer les potentiels nationaux en leviers de puissance souveraine.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" href="/consultation">
                Démarrer un projet
                <span className="ms" style={{ fontSize: '18px' }}>trending_flat</span>
              </Link>
              <a className="btn btn-ghost btn-lg" href="#methodologie">Notre Méthode</a>
            </div>
          </div>
          <div className="hero-card">
            <p className="hero-quote">&ldquo;Nous ne sommes pas seulement des consultants &mdash; nous sommes les architectes d&apos;une indépendance durable, au service des ambitions souveraines de l&apos;Espace AES.&rdquo;</p>
            <div className="hero-stats">
              <div className="hstat">
                <div className="hstat-num">36 190,7</div>
                <div className="hstat-label">Milliards FCFA<br />PND RELANCE 2026&ndash;2030</div>
              </div>
              <div className="hstat">
                <div className="hstat-num">3</div>
                <div className="hstat-label">Nations Unies<br />Confédération AES</div>
              </div>
              <div className="hstat span2">
                <div className="icon"><span className="ms">analytics</span></div>
                <div>
                  <div className="hstat-num">100%</div>
                  <div className="hstat-label">Engagement Endogène &mdash; Expertise Certifiée</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAND */}
      <div className="trust">
        <div className="wrap trust-inner">
          <div className="trust-item">
            <span className="ms ms-fill" style={{ fontSize: '15px', color: '#2D5A27' }}>check_circle</span>
            Analyse Scientifique
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <span className="ms ms-fill" style={{ fontSize: '15px', color: '#2D5A27' }}>check_circle</span>
            Secret Professionnel
          </div>
          <div className="trust-sep"></div>
          <div className="trust-item">
            <span className="ms ms-fill" style={{ fontSize: '15px', color: '#2D5A27' }}>check_circle</span>
            Expertise Certifiée
          </div>
          <div className="trust-sep"></div>
          <span className="trust-legal">
            <span className="ms" style={{ fontSize: '13px' }}>verified</span>
            RCCM&nbsp;: BJ-COO-01-2024-B13-00042 &nbsp;|&nbsp; IFU&nbsp;: 3202415487901
          </span>
        </div>
      </div>

      {/* SIIERES TEASER */}
      <section style={{ background: 'var(--navy-deep)', padding: '0', overflow: 'hidden', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '0', backgroundImage: 'radial-gradient(rgba(0,154,68,.18) 1px,transparent 1px)', backgroundSize: '32px 32px', pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', right: '0', top: '0', bottom: '0', width: '40%', background: 'radial-gradient(ellipse at right,rgba(200,16,46,.12) 0%,transparent 70%)', pointerEvents: 'none' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: '56px', paddingBottom: '56px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
            <div className="reveal">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '100px', background: 'rgba(200,16,46,.2)', border: '1px solid rgba(200,16,46,.35)', fontSize: '11px', fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', color: '#FF8A9B', marginBottom: '18px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF8A9B', display: 'inline-block', animation: 'evpulse 1.8s ease-out infinite' }}></span>
                Événement CASED &mdash; 23&ndash;26 Juillet 2026
              </div>
              <div style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 900, color: 'var(--white)', letterSpacing: '-.04em', lineHeight: '1.1', marginBottom: '12px' }}>
                SIIERES <span style={{ color: 'var(--accent)' }}>2026</span>
              </div>
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,.55)', marginBottom: '24px', lineHeight: '1.6', maxWidth: '520px' }}>
                &laquo;&nbsp;Des innovations structurelles, pour une Afrique résiliente et souveraine&nbsp;&raquo; &mdash; Ouagadougou, Burkina Faso
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link className="btn btn-primary" href="/siieres-2026">
                  Découvrir le Salon <span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
                </Link>
                <Link className="btn btn-ghost" href="/siieres-2026#partenariat">Devenir Partenaire</Link>
              </div>
            </div>
            <div className="reveal d1" style={{ textAlign: 'right' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', minWidth: '260px' }}>
                <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-lg)', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-.04em', lineHeight: '1' }}>4</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '5px' }}>Jours</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', borderRadius: 'var(--r-lg)', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-.04em', lineHeight: '1' }}>6</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,.35)', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '5px' }}>Pôles</div>
                </div>
                <div style={{ gridColumn: '1/-1', background: 'rgba(0,154,68,.1)', border: '1px solid rgba(0,154,68,.2)', borderRadius: 'var(--r-lg)', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Image src="/logo_aes.webp" alt="AES" width={60} height={40} style={{ height: '40px', width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,.6)' }}>
                    Confédération AES<br />Institution à l&apos;honneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION QUOTE */}
      <section className="vision section-y">
        <div className="wrap reveal">
          <span className="vision-label">Notre Engagement Institutionnel</span>
          <p className="vision-text">
            &ldquo;Devenir le <span className="gold">partenaire d&apos;ingénierie de référence</span> pour la transformation structurelle des économies de l&apos;Espace AES.&rdquo;
          </p>
        </div>
      </section>

      {/* EXPERTISE BENTO */}
      <section className="expertise section-y" id="expertise">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="slabel">Piliers d&apos;Expertise Stratégique</span>
            <h2>Quatre domaines.<br />Une vision souveraine.</h2>
            <div className="accentbar"></div>
          </div>
          <div className="bento">
            {/* Mines card - large left */}
            <div className="bc bc-mines reveal">
              <div className="mines-inner">
                <div>
                  <div className="bcard-icon icon-navy"><span className="ms">precision_manufacturing</span></div>
                  <h3 className="bcard-title" style={{ color: 'var(--navy)' }}>Mines &amp; Souveraineté Industrielle</h3>
                  <p className="bcard-body">Audit stratégique des concessions et structuration de chaînes de valeur locales pour capter la rente minérale.</p>
                  <Link className="bcard-cta" href="/expertise#mines">
                    Explorer le secteur<span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </Link>
                </div>
                <div className="img-ph mines-img" data-label="Souveraineté Minière"></div>
              </div>
            </div>
            {/* Environnement card - small right top */}
            <div className="bc bc-env reveal d1">
              <div className="bcard-icon icon-w20"><span className="ms">eco</span></div>
              <h3 className="bcard-title">Environnement &amp; RSE Endogène</h3>
              <p className="bcard-body-w">Développement durable ancré dans les réalités sahéliennes.</p>
              <Link className="bcard-cta bcard-cta-w" href="/expertise#environnement">
                En savoir plus<span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
              </Link>
            </div>
            {/* Énergies card - small left bottom */}
            <div className="bc bc-energy reveal">
              <div className="bcard-icon icon-accent"><span className="ms">bolt</span></div>
              <h3 className="bcard-title">Énergies &amp; Autonomie</h3>
              <p className="bcard-body-w">Transition énergétique et déploiement de solutions solaires pour une indépendance réseau totale.</p>
              <Link className="bcard-cta bcard-cta-w" href="/expertise#energies">
                Nos solutions<span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
              </Link>
            </div>
            {/* Validité card - large right bottom */}
            <div className="bc bc-validity reveal d1" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
              <div style={{ flex: 1 }}>
                <div className="bcard-icon icon-navy"><span className="ms">gavel</span></div>
                <h3 className="bcard-title" style={{ color: 'var(--navy)' }}>L&apos;Art de la Validité</h3>
                <p className="bcard-body">Sécurisation juridique et normative des grands projets d&apos;infrastructure.</p>
                <div className="chips">
                  <span className="chip">Audit Juridique</span>
                  <span className="chip">Conformité ISO</span>
                  <span className="chip">Veille Réglementaire</span>
                </div>
              </div>
              <div style={{ flexShrink: 0, opacity: '.12' }}>
                <span className="ms" style={{ fontSize: '120px', color: 'var(--accent)' }}>gavel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SENTIERS MAJEURS */}
      <section className="sentiers section-y" id="sentiers">
        <div className="wrap">
          <div className="sentiers-head reveal">
            <h2>Nos Sentiers Majeurs</h2>
            <p>Axes stratégiques de déploiement pour la résilience de l&apos;Espace AES</p>
          </div>
          <div className="sentiers-grid">
            <div className="sitem reveal">
              <div className="snum s-accent">Sentier 01</div>
              <h3>Souveraineté Économique</h3>
              <p>Modélisation de structures financières capables d&apos;autofinancer le développement national et de mobiliser des ressources alternatives aux budgets souverains.</p>
            </div>
            <div className="sitem reveal d1">
              <div className="snum s-green">Sentier 02</div>
              <h3>Résilience Énergétique</h3>
              <p>Infrastructures critiques pour une production d&apos;énergie décentralisée, sécurisée et souveraine, réduisant la dépendance aux acteurs extérieurs.</p>
            </div>
            <div className="sitem reveal d2">
              <div className="snum s-dim">Sentier 03</div>
              <h3>Cadre Normatif Endogène</h3>
              <p>Révision des cadres légaux pour favoriser les champions nationaux et établir des partenariats équitables alignés sur les intérêts de l&apos;AES.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }} className="reveal">
            <Link className="btn btn-primary btn-lg" href="/consultation">
              Initier une consultation <span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* MÉTHODOLOGIE */}
      <section className="method section-y" id="methodologie">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="slabel">Approche</span>
            <h2>Notre Méthodologie de Rupture</h2>
            <div className="accentbar"></div>
          </div>
          <div className="method-inner">
            <div className="method-list">
              <div className="mitem reveal">
                <div className="micon"><span className="ms">groups</span></div>
                <div>
                  <div className="mitem-title">Co-Construction</div>
                  <p className="mitem-body">Intégration des acteurs locaux dès la phase de conception pour garantir l&apos;appropriation sociale et la légitimité des solutions déployées.</p>
                </div>
              </div>
              <div className="mitem reveal d1">
                <div className="micon"><span className="ms">account_balance</span></div>
                <div>
                  <div className="mitem-title">Financement Innovant</div>
                  <p className="mitem-body">Mobilisation de ressources alternatives et optimisation des budgets souverains pour réduire la dépendance aux financements extérieurs.</p>
                </div>
              </div>
              <div className="mitem reveal d2">
                <div className="micon"><span className="ms">shield</span></div>
                <div>
                  <div className="mitem-title">Patriotisme Technologique</div>
                  <p className="mitem-body">Priorité au transfert de compétences et à l&apos;usage de technologies maîtrisables localement pour une autonomie technique durable.</p>
                </div>
              </div>
            </div>
            <div className="cycle reveal d1">
              <div className="cycle-title">Cycle d&apos;Expertise en 5 Étapes</div>
              <div className="cycle-steps">
                <div className="cstep">
                  <div className="cstep-num">1</div>
                  <div className="cstep-text">Diagnostic de Souveraineté</div>
                </div>
                <div className="cstep">
                  <div className="cstep-num">2</div>
                  <div className="cstep-text">Architecture Stratégique</div>
                </div>
                <div className="cstep">
                  <div className="cstep-num">3</div>
                  <div className="cstep-text">Modélisation Financière</div>
                </div>
                <div className="cstep">
                  <div className="cstep-num">4</div>
                  <div className="cstep-text">Sécurisation Normative</div>
                </div>
                <div className="cstep">
                  <div className="cstep-num">5</div>
                  <div className="cstep-text">Supervision de l&apos;Impact</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '52px' }} className="reveal">
            <Link className="btn btn-primary btn-lg" href="/approche">
              Méthodologie complète <span className="ms" style={{ fontSize: '18px' }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI CASED */}
      <section className="section-y" style={{ background: 'var(--white)' }} id="avantages">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="slabel">Pourquoi CASED</span>
            <h2>Six raisons de nous choisir</h2>
            <div className="accentbar"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 'var(--gap)' }} id="av-grid">
            {/* Card 1 */}
            <div className="av-card reveal">
              <div className="av-icon"><span className="ms">location_city</span></div>
              <div className="av-title">Connaissance Contextuelle</div>
              <p className="av-body">Ancrés à Ouagadougou, nous comprenons les dynamiques institutionnelles, culturelles et économiques propres au Burkina Faso et à l&apos;espace AES.</p>
            </div>
            {/* Card 2 */}
            <div className="av-card reveal d1">
              <div className="av-icon"><span className="ms">flag</span></div>
              <div className="av-title">Alignement RPP &amp; AES</div>
              <p className="av-body">Nos recommandations sont calibrées pour s&apos;inscrire dans le cadre du Référentiel des Politiques Publiques et des priorités stratégiques de la Confédération AES.</p>
            </div>
            {/* Card 3 */}
            <div className="av-card reveal d2">
              <div className="av-icon"><span className="ms">hub</span></div>
              <div className="av-title">Expertise Multisectorielle</div>
              <p className="av-body">4 domaines couverts — Mines, Environnement, Énergie et Cadre Normatif — pour une vision intégrée des enjeux de souveraineté économique.</p>
            </div>
            {/* Card 4 */}
            <div className="av-card reveal">
              <div className="av-icon"><span className="ms">speed</span></div>
              <div className="av-title">Cabinet Agile 2026</div>
              <p className="av-body">Fondé en 2026, nous répondons rapidement aux besoins émergents avec des équipes resserrées, sans les lourdeurs bureaucratiques des grands cabinets internationaux.</p>
            </div>
            {/* Card 5 */}
            <div className="av-card reveal d1">
              <div className="av-icon"><span className="ms">school</span></div>
              <div className="av-title">Ingénierie Endogène</div>
              <p className="av-body">Nos solutions privilégient le transfert de compétences et la valorisation des expertises locales pour construire une autonomie technique pérenne.</p>
            </div>
            {/* Card 6 — navy accent */}
            <div className="av-card reveal d2" style={{ background: 'var(--navy)', border: '1px solid var(--navy)' }}>
              <div className="av-icon" style={{ background: 'rgba(0,154,68,.18)' }}><span className="ms" style={{ color: 'var(--accent)' }}>public</span></div>
              <div className="av-title" style={{ color: 'var(--white)' }}>Réseau AES</div>
              <p className="av-body" style={{ color: 'rgba(255,255,255,.55)' }}>Présence et compréhension de l&apos;espace Mali-Burkina-Niger pour des interventions adaptées aux spécificités de chaque territoire souverain de la Confédération.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AES CONTEXTE */}
      <section className="aes section-y" id="aes">
        <div className="wrap">
          <div className="aes-inner">
            <div className="reveal">
              <div className="section-head" style={{ marginBottom: '32px' }}>
                <span className="slabel">Contexte Régional</span>
                <h2>L&apos;Espace AES :<br />Un Défi Stratégique Majeur</h2>
                <div className="accentbar"></div>
              </div>
              <p className="aes-body">
                La Confédération des États du Sahel regroupe le Burkina Faso, le Mali et le Niger dans un projet commun de souveraineté et de développement endogène. Face aux défis sécuritaires, climatiques et économiques, l&apos;espace AES engage une transition historique vers l&apos;autosuffisance stratégique.
              </p>
              <p className="aes-body" style={{ marginBottom: 0 }}>
                CASED se positionne comme le partenaire d&apos;ingénierie de cette transformation, en mobilisant expertise technique, rigueur analytique et ancrage territorial pour accompagner les décideurs publics et privés dans la construction d&apos;un développement réellement souverain.
              </p>
            </div>
            <div className="reveal d1">
              <div className="pnd-card" style={{ marginBottom: '24px' }}>
                <div className="pnd-header">
                  <div className="pnd-bar"></div>
                  <div>
                    <div className="pnd-name">Plan National de Développement RELANCE</div>
                    <div className="pnd-value">36 190,7 Milliards FCFA — 2026–2030</div>
                  </div>
                </div>
                <p className="pnd-quote">
                  &ldquo;Un plan de rupture pour la souveraineté économique du Burkina Faso, structurant les investissements stratégiques sur cinq années de transformation nationale.&rdquo;
                </p>
                <p className="pnd-attr">
                  <span className="ms">verified</span>
                  Gouvernement du Burkina Faso &mdash; Transition MPSR2
                </p>
              </div>
              <div className="aes-stats">
                <div className="ast ast-navy reveal">
                  <div className="ast-num">3</div>
                  <div className="ast-lbl">États Membres<br />Confédération AES</div>
                </div>
                <div className="ast ast-white reveal d1">
                  <div className="ast-num">72M+</div>
                  <div className="ast-lbl">Habitants<br />Espace AES</div>
                </div>
                <div className="ast ast-green reveal d2" style={{ gridColumn: '1/-1' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px' }}>
                    <Image src="/logo_aes.webp" alt="Logo AES" width={64} height={42} style={{ height: '42px', width: 'auto', objectFit: 'contain' }} />
                    <div>
                      <div className="ast-num" style={{ textAlign: 'left' }}>AES</div>
                      <div className="ast-lbl" style={{ textAlign: 'left' }}>Alliance des États du Sahel<br />Confédération Souveraine</div>
                    </div>
                  </div>
                </div>
                <div className="aes-map reveal d3">
                  <div style={{ textAlign: 'center', color: 'rgba(45,90,39,.45)', fontSize: '13px', fontWeight: 600 }}>
                    <span className="ms" style={{ fontSize: '32px', display: 'block', marginBottom: '8px', color: 'rgba(45,90,39,.3)' }}>map</span>
                    Burkina Faso · Mali · Niger<br />
                    <span style={{ fontSize: '11px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Espace Confédéral AES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-y" id="contact">
        <div className="wrap">
          <div className="contact-card">
            <div className="contact-left">
              <h2 className="contact-h">Discutons de votre projet souverain</h2>
              <p className="contact-desc">
                Que vous soyez une institution publique, un opérateur privé ou une organisation internationale, CASED met son expertise au service de vos ambitions stratégiques dans l&apos;espace AES.
              </p>
              <div className="cinfo">
                <div className="cinfo-item">
                  <span className="ms">location_on</span>
                  Ouagadougou, Burkina Faso — Confédération AES
                </div>
                <div className="cinfo-item">
                  <span className="ms">mail</span>
                  contact@cased-bf.com
                </div>
                <div className="cinfo-item">
                  <span className="ms">schedule</span>
                  Lun – Ven, 08h00 – 18h00 (GMT)
                </div>
                <div className="cinfo-item">
                  <span className="ms">verified</span>
                  RCCM&nbsp;: BJ-COO-01-2024-B13-00042
                </div>
              </div>
            </div>
            <div className="form-card">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
