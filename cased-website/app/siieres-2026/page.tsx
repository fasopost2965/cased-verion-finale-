'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0, secs: 0 });
  useEffect(() => {
    function update() {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 }); return; }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  return timeLeft;
}

const pad = (n: number) => String(n).padStart(2, '0');

export default function SiieresPage() {
  const countdown = useCountdown(new Date('2026-07-23T00:00:00'));

  return (
    <>
      <style>{`
        .s-hero{padding-top:76px;min-height:100svh;background:var(--navy-deep);position:relative;overflow:hidden;display:flex;align-items:center}
        .s-hero-bg{position:absolute;inset:0;background:linear-gradient(135deg,#0C1828 0%,#1A2B4B 50%,#0C2010 100%)}
        .s-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,154,68,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(0,154,68,.06) 1px,transparent 1px);background-size:48px 48px;pointer-events:none}
        .s-hero-glow1{position:absolute;top:-20%;left:-10%;width:60%;height:80%;background:radial-gradient(ellipse,rgba(0,154,68,.12) 0%,transparent 65%);pointer-events:none}
        .s-hero-glow2{position:absolute;bottom:-20%;right:-10%;width:50%;height:70%;background:radial-gradient(ellipse,rgba(200,16,46,.08) 0%,transparent 65%);pointer-events:none}
        .s-hero-inner{position:relative;z-index:1;display:grid;grid-template-columns:1fr auto;gap:60px;align-items:center;padding-top:60px;padding-bottom:60px}
        .event-badge{display:inline-flex;align-items:center;gap:8px;padding:6px 16px;border-radius:100px;background:rgba(200,16,46,.2);border:1px solid rgba(200,16,46,.4);font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#FF6B6B;margin-bottom:24px}
        .event-dot{width:7px;height:7px;border-radius:50%;background:#FF6B6B;animation:evpulse 1.8s ease-out infinite}
        .s-hero-h1{font-size:clamp(14px,1.4vw,17px);font-weight:700;color:rgba(255,255,255,.45);letter-spacing:.16em;text-transform:uppercase;margin-bottom:16px}
        .s-hero-acronym{font-size:clamp(52px,8vw,100px);font-weight:900;color:var(--white);letter-spacing:-.05em;line-height:.95;margin-bottom:20px;background:linear-gradient(135deg,#FFFFFF 0%,#A8D8B5 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
        .s-hero-tagline{font-size:clamp(17px,2vw,22px);font-style:italic;color:rgba(255,255,255,.65);line-height:1.5;max-width:640px;margin-bottom:36px}
        .s-hero-tagline em{color:var(--accent);font-style:normal;font-weight:600}
        .s-hero-meta{display:flex;align-items:center;gap:28px;flex-wrap:wrap;margin-bottom:40px}
        .s-hero-meta-item{display:flex;align-items:center;gap:8px;font-size:14px;color:rgba(255,255,255,.6)}
        .s-hero-meta-item .ms{font-size:18px;color:var(--accent)}
        .countdown-box{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-xl);padding:32px;text-align:center;min-width:280px;flex-shrink:0}
        .cd-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:20px}
        .cd-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
        .cd-unit{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:var(--r-md);padding:16px 8px}
        .cd-num{font-size:36px;font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}
        .cd-lbl{font-size:9px;font-weight:700;color:rgba(255,255,255,.35);text-transform:uppercase;letter-spacing:.1em;margin-top:6px}
        .cd-date{margin-top:20px;padding:12px;background:rgba(0,154,68,.12);border:1px solid rgba(0,154,68,.2);border-radius:var(--r-md);font-size:13px;font-weight:700;color:rgba(255,255,255,.7);display:flex;align-items:center;justify-content:center;gap:8px}
        .cd-date .ms{color:var(--accent);font-size:16px}
        .date-banner{background:#C8102E;padding:14px 0}
        .date-banner-inner{display:flex;align-items:center;justify-content:center;gap:40px;flex-wrap:wrap}
        .db-item{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:var(--white);letter-spacing:.04em;text-transform:uppercase}
        .db-item .ms{font-size:17px;opacity:.8}
        .db-sep{color:rgba(255,255,255,.3);font-size:20px;font-weight:300}
        .context-section{background:var(--white)}
        .context-grid{display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
        .context-stat-big{font-size:clamp(52px,7vw,84px);font-weight:900;color:var(--accent);letter-spacing:-.05em;line-height:1;margin-bottom:8px}
        .context-stat-label{font-size:14px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;margin-bottom:32px}
        .context-pillars{display:flex;flex-direction:column;gap:16px}
        .context-pillar{display:flex;align-items:flex-start;gap:14px;padding:18px;border:1px solid var(--border);border-radius:var(--r-lg);transition:border-color .2s,transform .2s}
        .context-pillar:hover{border-color:var(--accent);transform:translateX(4px)}
        .cp-icon{width:40px;height:40px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .cp-i-green{background:rgba(0,154,68,.1)}.cp-i-green .ms{color:var(--accent);font-size:20px}
        .cp-i-navy{background:rgba(26,43,75,.08)}.cp-i-navy .ms{color:var(--navy);font-size:20px}
        .cp-i-red{background:rgba(200,16,46,.08)}.cp-i-red .ms{color:#C8102E;font-size:20px}
        .cp-title{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px}
        .cp-body{font-size:14px;color:var(--muted);line-height:1.6}
        .shd{margin-bottom:52px;text-align:center}
        .shd .slbl{display:block;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
        .shd h2{font-size:clamp(26px,3.2vw,36px);font-weight:700;color:var(--navy);letter-spacing:-.025em;line-height:1.2}
        .shd p{font-size:16px;color:var(--muted);margin-top:10px;max-width:600px;margin-left:auto;margin-right:auto}
        .shd-left{text-align:left}
        .shd-left .accentbar{margin-left:0}
        .poles-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap)}
        .pole-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-xl);padding:36px;transition:all .3s ease;position:relative;overflow:hidden}
        .pole-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--accent);transform:scaleX(0);transform-origin:left;transition:transform .3s ease}
        .pole-card:hover{transform:translateY(-4px);box-shadow:var(--sh-lg);border-color:rgba(0,154,68,.2)}
        .pole-card:hover::before{transform:scaleX(1)}
        .pole-num{font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--accent);margin-bottom:16px}
        .pole-icon{width:56px;height:56px;border-radius:var(--r-lg);display:flex;align-items:center;justify-content:center;margin-bottom:18px;transition:transform .3s}
        .pole-card:hover .pole-icon{transform:scale(1.1)}
        .pole-icon .ms{font-size:28px}
        .p-ind{background:rgba(26,43,75,.08)}.p-ind .ms{color:var(--navy)}
        .p-ene{background:rgba(0,154,68,.1)}.p-ene .ms{color:var(--accent)}
        .p-env{background:rgba(45,90,39,.1)}.p-env .ms{color:var(--green)}
        .p-rse{background:rgba(200,16,46,.08)}.p-rse .ms{color:#C8102E}
        .p-inn{background:rgba(97,77,162,.1)}.p-inn .ms{color:#614DA2}
        .p-inst{background:rgba(197,160,89,.1)}.p-inst .ms{color:#8A6A28}
        .pole-title{font-size:18px;font-weight:700;color:var(--navy);margin-bottom:10px;line-height:1.3}
        .pole-body{font-size:14px;color:var(--muted);line-height:1.65}
        .program{background:var(--navy-deep);padding:var(--sy) 0;position:relative;overflow:hidden}
        .program::before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(0,154,68,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,154,68,.04) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
        .prog-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:rgba(255,255,255,.06);border-radius:var(--r-xl);overflow:hidden;position:relative;z-index:1}
        .prog-day{background:var(--navy-deep);padding:36px 28px;transition:background .25s}
        .prog-day:hover{background:rgba(255,255,255,.04)}
        .prog-day-num{font-size:10px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;margin-bottom:8px}
        .pd-1{color:var(--accent)}.pd-2{color:#6BBFFF}.pd-3{color:#FF9E6B}.pd-4{color:#FFD700}
        .prog-day-date{font-size:13px;font-weight:600;color:rgba(255,255,255,.4);margin-bottom:16px}
        .prog-day-title{font-size:17px;font-weight:700;color:var(--white);margin-bottom:12px;line-height:1.3}
        .prog-items{display:flex;flex-direction:column;gap:8px}
        .prog-item{display:flex;align-items:flex-start;gap:8px;font-size:13px;color:rgba(255,255,255,.5);line-height:1.5}
        .prog-item::before{content:'→';color:var(--accent);flex-shrink:0;margin-top:1px}
        .sites-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--gap)}
        .site-card{border-radius:var(--r-xl);padding:48px;position:relative;overflow:hidden}
        .site-card-siao{background:var(--navy)}
        .site-card-palace{background:linear-gradient(135deg,#1a0a00,#3a1500)}
        .site-card::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.04) 1px,transparent 1px);background-size:24px 24px;pointer-events:none}
        .site-inner{position:relative;z-index:1}
        .site-badge{display:inline-block;padding:4px 12px;border-radius:var(--r);font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;margin-bottom:20px}
        .site-badge-siao{background:rgba(0,154,68,.2);color:#7FCF9A;border:1px solid rgba(0,154,68,.3)}
        .site-badge-palace{background:rgba(197,160,89,.2);color:#D4B46A;border:1px solid rgba(197,160,89,.3)}
        .site-num{font-size:64px;font-weight:900;color:rgba(255,255,255,.08);position:absolute;top:24px;right:24px;letter-spacing:-.04em;line-height:1}
        .site-h{font-size:22px;font-weight:700;color:var(--white);margin-bottom:10px;line-height:1.3}
        .site-sub{font-size:14px;color:rgba(255,255,255,.5);margin-bottom:20px}
        .site-features{display:flex;flex-direction:column;gap:8px}
        .site-feat{display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.6)}
        .site-feat .ms{font-size:16px;color:var(--accent)}
        .packages{background:var(--surface)}
        .pkg-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap)}
        .pkg-card{border-radius:var(--r-xl);padding:36px;position:relative;overflow:hidden;transition:transform .3s,box-shadow .3s}
        .pkg-card:hover{transform:translateY(-6px);box-shadow:var(--sh-lg)}
        .pkg-platinium{background:linear-gradient(135deg,var(--navy-deep),#1A2B4B);color:var(--white);border:1px solid rgba(255,255,255,.1)}
        .pkg-gold{background:linear-gradient(135deg,#3a2800,#5a3d00);color:var(--white);border:1px solid rgba(197,160,89,.2)}
        .pkg-silver{background:var(--white);border:2px solid var(--border)}
        .pkg-bronze{background:var(--surface2);border:1px solid var(--border)}
        .pkg-tier{font-size:10px;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin-bottom:16px;display:block}
        .pkg-platinium .pkg-tier{color:rgba(255,255,255,.5)}
        .pkg-gold .pkg-tier{color:#D4B46A}
        .pkg-silver .pkg-tier,.pkg-bronze .pkg-tier{color:var(--muted)}
        .pkg-name{font-size:24px;font-weight:800;letter-spacing:-.025em;margin-bottom:6px;line-height:1.2}
        .pkg-platinium .pkg-name,.pkg-gold .pkg-name{color:var(--white)}
        .pkg-silver .pkg-name,.pkg-bronze .pkg-name{color:var(--navy)}
        .pkg-sub{font-size:13px;margin-bottom:24px;line-height:1.5}
        .pkg-platinium .pkg-sub,.pkg-gold .pkg-sub{color:rgba(255,255,255,.5)}
        .pkg-silver .pkg-sub,.pkg-bronze .pkg-sub{color:var(--muted)}
        .pkg-badge{position:absolute;top:20px;right:20px;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800}
        .pkg-platinium .pkg-badge{background:rgba(255,255,255,.08);color:rgba(255,255,255,.4)}
        .pkg-gold .pkg-badge{background:rgba(197,160,89,.2);color:#D4B46A}
        .pkg-silver .pkg-badge{background:rgba(180,180,180,.15);color:#9CA3AF}
        .pkg-bronze .pkg-badge{background:rgba(180,120,60,.12);color:#B07840}
        .pkg-features{display:flex;flex-direction:column;gap:9px;margin-bottom:24px}
        .pkg-feat{display:flex;align-items:flex-start;gap:8px;font-size:13px;line-height:1.5}
        .pkg-platinium .pkg-feat,.pkg-gold .pkg-feat{color:rgba(255,255,255,.65)}
        .pkg-silver .pkg-feat,.pkg-bronze .pkg-feat{color:var(--muted)}
        .pkg-feat .ms{font-size:15px;color:var(--accent);flex-shrink:0;margin-top:1px}
        .pkg-cta{display:block;width:100%;padding:13px;text-align:center;font-size:14px;font-weight:700;border-radius:var(--r);transition:all .2s;cursor:pointer;border:none;font-family:inherit}
        .pkg-platinium .pkg-cta{background:var(--accent);color:var(--white)}.pkg-platinium .pkg-cta:hover{background:var(--accent-dk)}
        .pkg-gold .pkg-cta{background:rgba(197,160,89,.9);color:var(--white)}.pkg-gold .pkg-cta:hover{background:rgba(197,160,89,1)}
        .pkg-silver .pkg-cta{background:var(--navy);color:var(--white)}.pkg-silver .pkg-cta:hover{background:var(--navy-deep)}
        .pkg-bronze .pkg-cta{border:1.5px solid var(--navy);color:var(--navy)}.pkg-bronze .pkg-cta:hover{background:var(--navy);color:var(--white)}
        .register{background:var(--accent);padding:var(--sy) 0;position:relative;overflow:hidden}
        .register::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.1) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
        .register-inner{position:relative;z-index:1;text-align:center}
        .register h2{font-size:clamp(28px,4vw,48px);font-weight:800;color:var(--white);letter-spacing:-.03em;margin-bottom:16px}
        .register p{font-size:17px;color:rgba(255,255,255,.8);max-width:560px;margin:0 auto 36px;line-height:1.65}
        .register-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        .btn-white{background:var(--white);color:var(--accent);font-weight:700}.btn-white:hover{background:var(--surface)}
        .btn-white-ghost{border:2px solid rgba(255,255,255,.5);color:var(--white)}.btn-white-ghost:hover{background:rgba(255,255,255,.1)}
        .register-contact{margin-top:32px;display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .rc-item{display:flex;align-items:center;gap:8px;font-size:14px;color:rgba(255,255,255,.75)}
        .rc-item .ms{font-size:18px;opacity:.7}
        @media(max-width:1024px){.s-hero-inner{grid-template-columns:1fr}.countdown-box{display:none}.context-grid{grid-template-columns:1fr}.poles-grid{grid-template-columns:repeat(2,1fr)}.prog-grid{grid-template-columns:repeat(2,1fr)}.sites-grid{grid-template-columns:1fr}.pkg-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:768px){.poles-grid{grid-template-columns:1fr}.prog-grid{grid-template-columns:1fr}.pkg-grid{grid-template-columns:1fr}.date-banner-inner{gap:16px}}
        @media(max-width:480px){.hero-actions{flex-direction:column}}
      `}</style>

      <ScrollReveal />

      {/* Hero */}
      <section className="s-hero">
        <div className="s-hero-bg" />
        <div className="s-hero-grid" />
        <div className="s-hero-glow1" />
        <div className="s-hero-glow2" />
        <div className="wrap s-hero-inner">
          <div>
            <div className="event-badge reveal">
              <div className="event-dot" />
              Édition 2026 — Ouagadougou
            </div>
            <div className="s-hero-h1 reveal d1">Salon International de l&apos;Industrie, de l&apos;Énergie, de l&apos;Environnement, de la Responsabilité et de la Souveraineté</div>
            <div className="s-hero-acronym reveal d2">SIIERES</div>
            <p className="s-hero-tagline reveal d3"><em>&quot;Des innovations structurelles, pour une Afrique résiliente et souveraine !&quot;</em></p>
            <div className="s-hero-meta reveal d3">
              <div className="s-hero-meta-item"><span className="ms">calendar_month</span>23 – 26 Juillet 2026</div>
              <div className="s-hero-meta-item"><span className="ms">location_on</span>Ouagadougou, Burkina Faso</div>
              <div className="s-hero-meta-item"><span className="ms">corporate_fare</span>Organisé par CASED</div>
            </div>
            <div className="hero-actions reveal d4">
              <Link className="btn btn-primary btn-lg" href="#partenariat">Devenir Partenaire</Link>
              <Link className="btn btn-ghost btn-lg" href="#programme">Voir le Programme</Link>
            </div>
          </div>
          <div className="countdown-box reveal d2">
            <div className="cd-title">Ouverture dans</div>
            <div className="cd-grid">
              <div className="cd-unit"><div className="cd-num">{pad(countdown.days)}</div><div className="cd-lbl">Jours</div></div>
              <div className="cd-unit"><div className="cd-num">{pad(countdown.hours)}</div><div className="cd-lbl">Heures</div></div>
              <div className="cd-unit"><div className="cd-num">{pad(countdown.mins)}</div><div className="cd-lbl">Min</div></div>
              <div className="cd-unit"><div className="cd-num">{pad(countdown.secs)}</div><div className="cd-lbl">Sec</div></div>
            </div>
            <div className="cd-date">
              <span className="ms">event</span>
              Ouverture officielle — 23 juillet 2026
            </div>
          </div>
        </div>
      </section>

      {/* Date Banner */}
      <div className="date-banner">
        <div className="wrap date-banner-inner">
          <div className="db-item"><span className="ms">event</span>Jour 1 — Mercredi 23 juillet : Ouverture &amp; Souveraineté</div>
          <span className="db-sep">|</span>
          <div className="db-item"><span className="ms">factory</span>Jour 2 — Jeudi 24 juillet : Industrie &amp; Énergie</div>
          <span className="db-sep">|</span>
          <div className="db-item"><span className="ms">groups</span>Jour 3 — Vendredi 25 juillet : Jeunesse &amp; RSE</div>
          <span className="db-sep">|</span>
          <div className="db-item"><span className="ms">emoji_events</span>Jour 4 — Samedi 26 juillet : Gala &amp; SIIERES Awards</div>
        </div>
      </div>

      {/* Context */}
      <section className="context-section section-y">
        <div className="wrap context-grid">
          <div className="reveal">
            <div className="context-stat-big">402,2</div>
            <div className="context-stat-label">Milliards USD — Déficit de financement annuel de l&apos;Afrique</div>
            <div className="context-pillars">
              <div className="context-pillar">
                <div className="cp-icon cp-i-green"><span className="ms">account_balance</span></div>
                <div><div className="cp-title">Souveraineté Économique</div><p className="cp-body">Rompre avec le modèle d&apos;exportation brute pour bâtir des chaînes de valeur locales et substituer les importations.</p></div>
              </div>
              <div className="context-pillar">
                <div className="cp-icon cp-i-navy"><span className="ms">bolt</span></div>
                <div><div className="cp-title">Indépendance Énergétique</div><p className="cp-body">73,6 % de la consommation burkinabè provient de la biomasse traditionnelle. La transition vers le solaire et le biogaz est urgente.</p></div>
              </div>
              <div className="context-pillar">
                <div className="cp-icon cp-i-red"><span className="ms">eco</span></div>
                <div><div className="cp-title">Responsabilité (RSE)</div><p className="cp-body">Internaliser les impacts sociaux et environnementaux des industries extractives pour garantir un développement inclusif et durable.</p></div>
              </div>
            </div>
          </div>
          <div className="reveal d1">
            <h2 style={{ fontSize: 'clamp(26px,3vw,34px)', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-.025em', marginBottom: 16 }}>La première plateforme d&apos;actions stratégiques d&apos;Afrique de l&apos;Ouest</h2>
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.72, marginBottom: 20 }}>Le SIIERES 2026 transcende le format classique d&apos;une foire pour devenir un <strong>hub de décisions politiques et d&apos;accords d&apos;affaires</strong> à l&apos;échelle de l&apos;Espace AES.</p>
            <p style={{ fontSize: 16, color: 'var(--muted)', lineHeight: 1.72, marginBottom: 28 }}>Cette édition met en lumière la <strong>Confédération de l&apos;AES</strong> — Mali, Burkina Faso, Niger — en présentant ses réformes et opportunités d&apos;investissements pour une croissance endogène irréversible.</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
              <Image src="/logo_aes.webp" alt="Logo AES" width={72} height={72} style={{ height: 72, width: 'auto', objectFit: 'contain' }} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>Institution à l&apos;honneur</div>
                <div style={{ fontSize: 14, color: 'var(--muted)' }}>Confédération des États du Sahel — AES</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Pôles */}
      <section className="section-y" style={{ background: 'var(--surface)' }} id="poles">
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">6 espaces thématiques</span>
            <h2>Les Pôles du SIIERES</h2>
            <p>Couvrant l&apos;intégralité de la chaîne de valeur, de l&apos;industrie à la diplomatie économique</p>
            <div className="accentbar" />
          </div>
          <div className="poles-grid">
            {[
              { num: '01', icon: 'factory', cls: 'p-ind', title: 'Industrialisation & Machinisme', body: "Transformation locale des ressources, agro-industrie et valorisation des matières premières en produits finis à haute valeur ajoutée pour l'espace AES." },
              { num: '02', icon: 'solar_power', cls: 'p-ene', title: 'Énergies Renouvelables', body: "Technologies solaires, éoliennes et valorisation énergétique de la biomasse (biogaz) pour atteindre l'indépendance énergétique du Sahel." },
              { num: '03', icon: 'recycling', cls: 'p-env', title: 'Environnement & Économie Circulaire', body: "Gestion, tri et recyclage des déchets transformés en nouvelles ressources économiques, au service d'une croissance verte et souveraine." },
              { num: '04', icon: 'diversity_3', cls: 'p-rse', title: 'RSE & Inclusion', body: "Accompagnement vers les normes internationales et le reporting extra-financier du SYSCOHADA révisé (Note 35). RSE comme levier de légitimité territoriale." },
              { num: '05', icon: 'rocket_launch', cls: 'p-inn', title: 'Innovation & Startups', body: 'Le "Village SIIERES" accueillant un Hackathon dédié aux solutions numériques GreenTech et AgriTech, avec pitching et financement direct.' },
              { num: '06', icon: 'handshake', cls: 'p-inst', title: 'Institutionnel & Intégration', body: "Espace diplomatique B2G facilitant les rencontres entre décideurs politiques, ministres sectoriels et grands investisseurs institutionnels." },
            ].map((p, i) => (
              <div key={p.num} className={`pole-card reveal${i % 3 === 1 ? ' d1' : i % 3 === 2 ? ' d2' : ''}`}>
                <div className="pole-num">Pôle {p.num}</div>
                <div className={`pole-icon ${p.cls}`}><span className="ms">{p.icon}</span></div>
                <div className="pole-title">{p.title}</div>
                <p className="pole-body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="program" id="programme">
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Parcours immersif</span>
            <h2 style={{ color: 'var(--white)' }}>Programme en 4 Jours</h2>
            <p style={{ color: 'rgba(255,255,255,.45)' }}>Du 23 au 26 juillet 2026 — Ouagadougou, Burkina Faso</p>
            <div className="accentbar" />
          </div>
          <div className="prog-grid">
            {[
              { num: 'Jour 01', cls: 'pd-1', date: 'Mercredi 23 juillet', title: 'Souveraineté & Orientations', items: ["Cérémonie d'ouverture officielle", "Assises de haut niveau — Politiques de résilience AES", "Discours ministériels & orientations stratégiques", "Visite inaugurale des pavillons"] },
              { num: 'Jour 02', cls: 'pd-2', date: 'Jeudi 24 juillet', title: 'Industrie & Énergie', items: ["Lancement des rencontres B2B et B2G", "Ateliers techniques — Chaînes de valeur ZLECAf", "Panels experts — Transition énergétique Sahel", "Signature d'accords de partenariat"] },
              { num: 'Jour 03', cls: 'pd-3', date: 'Vendredi 25 juillet', title: 'Jeunesse & RSE', items: ["Pitch final du Hackathon — Village SIIERES", "Focus entrepreneuriat féminin & inclusion", "Masterclass — Conformité RSE & SYSCOHADA", "Forum Jeunesse AES"] },
              { num: 'Jour 04', cls: 'pd-4', date: 'Samedi 26 juillet', title: 'Excellence & Synthèse', items: ["Publication du Livre Blanc de la Souveraineté", "Remise des SIIERES Awards", "Dîner de Gala — Palace Hôtel Libya", "Clôture officielle"] },
            ].map((d, i) => (
              <div key={d.num} className={`prog-day reveal d${i}`}>
                <div className={`prog-day-num ${d.cls}`}>{d.num}</div>
                <div className="prog-day-date">{d.date}</div>
                <div className="prog-day-title">{d.title}</div>
                <div className="prog-items">
                  {d.items.map(item => <div key={item} className="prog-item">{item}</div>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sites */}
      <section className="section-y" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="shd shd-left reveal">
            <span className="slbl">Organisation Multi-sites</span>
            <h2>Deux sites emblématiques</h2>
            <div className="accentbar" />
          </div>
          <div className="sites-grid">
            <div className="site-card site-card-siao reveal">
              <div className="site-inner">
                <div className="site-badge site-badge-siao">Site 01 — Expositions</div>
                <div className="site-num">01</div>
                <h3 className="site-h">SIAO — Salon International de l&apos;Artisanat de Ouagadougou</h3>
                <p className="site-sub">Vitrine technologique accueillant les pavillons industriels, le machinisme et les rencontres d&apos;affaires professionnelles.</p>
                <div className="site-features">
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Pavillons industriels nationaux et internationaux</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Rencontres B2B et B2G organisées</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Village SIIERES — Innovation &amp; Startups</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Machinisme et démos technologiques</div>
                </div>
              </div>
            </div>
            <div className="site-card site-card-palace reveal d1">
              <div className="site-inner">
                <div className="site-badge site-badge-palace">Site 02 — Institutionnel</div>
                <div className="site-num">02</div>
                <h3 className="site-h">Palace Hôtel Libya — Pôle Institutionnel de Prestige</h3>
                <p className="site-sub">Cadre de prestige dédié aux Assises ministérielles, au dialogue politique de haut niveau et au Dîner de Gala de clôture.</p>
                <div className="site-features">
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Assises ministérielles AES</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Dialogue politique de haut niveau</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Dîner de Gala &amp; SIIERES Awards</div>
                  <div className="site-feat"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Réunions bilatérales confidentielles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="packages section-y" id="partenariat">
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Opportunités de Partenariat</span>
            <h2>Devenez bâtisseur de la nouvelle économie africaine</h2>
            <p>Accès privilégié aux décideurs, visibilité panafricaine, accès aux talents — un ROI mesurable et stratégique.</p>
            <div className="accentbar" />
          </div>
          <div className="pkg-grid">
            <div className="pkg-card pkg-platinium reveal">
              <span className="pkg-tier">Partenaire Stratégique</span>
              <div className="pkg-name">Platinium</div>
              <p className="pkg-sub">Positionnement maximal — Visibilité totale sur toute la durée de l&apos;événement</p>
              <div className="pkg-badge">★</div>
              <div className="pkg-features">
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Accès direct ministres &amp; investisseurs</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Lucarne TV 5 min/jour — Grande écoute</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Pavillon premium — Emplacement N°1</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>CVthèque complète des talents</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Table Gala + discours de clôture</div>
              </div>
              <Link href="/consultation" className="pkg-cta">Nous contacter</Link>
            </div>
            <div className="pkg-card pkg-gold reveal d1">
              <span className="pkg-tier">Partenaire Principal</span>
              <div className="pkg-name">Gold</div>
              <p className="pkg-sub">Forte visibilité — Présence stratégique sur les deux sites</p>
              <div className="pkg-badge">◆</div>
              <div className="pkg-features">
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Rencontres B2B/B2G prioritaires</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Couverture médiatique panafricaine</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Pavillon exposant — Position centrale</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Accès CVthèque partiel</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Invitation Dîner de Gala</div>
              </div>
              <Link href="/consultation" className="pkg-cta">Nous contacter</Link>
            </div>
            <div className="pkg-card pkg-silver reveal d2">
              <span className="pkg-tier">Partenaire Associé</span>
              <div className="pkg-name">Silver</div>
              <p className="pkg-sub">Présence active — Opportunités de networking ciblées</p>
              <div className="pkg-badge">◇</div>
              <div className="pkg-features">
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Espace exposant — Zone B</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Logo dans les supports officiels</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Participation aux ateliers</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>10 badges d&apos;accès VIP</div>
              </div>
              <Link href="/consultation" className="pkg-cta">Nous contacter</Link>
            </div>
            <div className="pkg-card pkg-bronze reveal d3">
              <span className="pkg-tier">Soutien Officiel</span>
              <div className="pkg-name">Bronze</div>
              <p className="pkg-sub">Visibilité institutionnelle — Soutien de la première édition AES</p>
              <div className="pkg-badge">○</div>
              <div className="pkg-features">
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Mention officielle SIIERES</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>Logo sur site web &amp; affiches</div>
                <div className="pkg-feat"><span className="ms ms-fill" style={{ fontSize: 15 }}>check_circle</span>5 badges d&apos;accès participants</div>
              </div>
              <Link href="/consultation" className="pkg-cta">Nous contacter</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Register CTA */}
      <section className="register">
        <div className="wrap register-inner reveal">
          <h2>Rejoignez le mouvement souverain</h2>
          <p>Participez à l&apos;événement stratégique de l&apos;année pour l&apos;Afrique de l&apos;Ouest. Rejoignez les décideurs, innovateurs et bâtisseurs de la nouvelle économie africaine.</p>
          <div className="register-actions">
            <Link className="btn btn-white btn-lg" href="/consultation">Devenir Partenaire</Link>
            <Link className="btn btn-white-ghost btn-lg" href="#programme">Voir le Programme</Link>
          </div>
          <div className="register-contact">
            <div className="rc-item"><span className="ms">mail</span>contact@cased-bf.com</div>
            <div className="rc-item"><span className="ms">call</span>+226 25 43 11 44</div>
            <div className="rc-item"><span className="ms">calendar_month</span>23–26 Juillet 2026</div>
          </div>
        </div>
      </section>
    </>
  );
}
