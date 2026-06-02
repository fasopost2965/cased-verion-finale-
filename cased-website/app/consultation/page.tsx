'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const rgpd = (form.querySelector('[name=rgpd]') as HTMLInputElement)?.checked;
    if (!rgpd) { alert('Veuillez accepter la politique de confidentialité pour continuer.'); return; }

    const data = {
      nom: (form.querySelector('[name=nom]') as HTMLInputElement)?.value || '',
      organisation: (form.querySelector('[name=organisation]') as HTMLInputElement)?.value || '',
      email: (form.querySelector('[name=email]') as HTMLInputElement)?.value || '',
      telephone: (form.querySelector('[name=telephone]') as HTMLInputElement)?.value || '',
      secteur: (form.querySelector('[name=secteur]') as HTMLSelectElement)?.value || '',
      projet: (form.querySelector('[name=projet]') as HTMLTextAreaElement)?.value || '',
    };

    setEmail(data.email);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Erreur serveur');
      setSubmitted(true);
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement à contact@cased-bf.com');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <style>{`
        .page-hero{padding-top:76px;background:var(--navy-deep);position:relative;overflow:hidden}
        .page-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.2) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
        .c-hero-inner{position:relative;z-index:1;padding-top:72px;padding-bottom:72px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
        .hero-label{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:rgba(0,154,68,.18);color:#7FCF9A;border:1px solid rgba(0,154,68,.25);margin-bottom:20px}
        .hero-h1{font-size:clamp(32px,4.2vw,52px);font-weight:800;color:var(--white);letter-spacing:-.035em;line-height:1.1;margin-bottom:20px}
        .hero-h1 .acc{color:var(--accent)}
        .hero-desc{font-size:17px;line-height:1.72;color:rgba(255,255,255,.6);margin-bottom:32px}
        .hero-trust{display:flex;flex-direction:column;gap:12px}
        .htrust-item{display:flex;align-items:center;gap:10px;font-size:14px;color:rgba(255,255,255,.65)}
        .htrust-item .ms{font-size:18px;color:var(--accent)}
        .hero-contact-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-xl);padding:36px}
        .hcc-title{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:20px}
        .hcc-items{display:flex;flex-direction:column;gap:18px}
        .hcc-item{display:flex;align-items:flex-start;gap:14px}
        .hcc-icon{width:40px;height:40px;border-radius:var(--r-md);background:rgba(0,154,68,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .hcc-icon .ms{font-size:20px;color:var(--accent)}
        .hcc-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:rgba(255,255,255,.35);margin-bottom:4px}
        .hcc-value{font-size:15px;color:rgba(255,255,255,.8);font-weight:500;line-height:1.4}
        .hcc-divider{height:1px;background:rgba(255,255,255,.08);margin:4px 0}
        .response-badge{display:flex;align-items:center;gap:10px;margin-top:20px;padding:14px;background:rgba(0,154,68,.12);border:1px solid rgba(0,154,68,.2);border-radius:var(--r-md)}
        .response-badge .ms{color:var(--accent);font-size:18px}
        .response-badge span{font-size:13px;font-weight:600;color:rgba(255,255,255,.7)}
        .form-section{background:var(--white);padding:var(--sy) 0}
        .form-section-inner{display:grid;grid-template-columns:1fr 2fr;gap:64px;align-items:start}
        .sidebar-h{font-size:22px;font-weight:700;color:var(--navy);letter-spacing:-.025em;margin-bottom:12px}
        .sidebar-desc{font-size:15px;color:var(--muted);line-height:1.7;margin-bottom:32px}
        .sidebar-features{display:flex;flex-direction:column;gap:14px}
        .sf-item{display:flex;align-items:flex-start;gap:12px}
        .sf-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);flex-shrink:0;margin-top:7px}
        .sf-text{font-size:14px;color:var(--muted);line-height:1.6}
        .sf-text strong{color:var(--navy);font-weight:600}
        .sidebar-legal{margin-top:32px;padding:20px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--r-lg)}
        .sl-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--dim);margin-bottom:10px}
        .sl-badges{display:flex;flex-direction:column;gap:6px}
        .sl-badge{font-size:11px;color:var(--muted);font-weight:500}
        .form-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r-xl);padding:48px}
        .form-title{font-size:22px;font-weight:700;color:var(--navy);letter-spacing:-.025em;margin-bottom:6px}
        .form-subtitle{font-size:15px;color:var(--muted);margin-bottom:36px}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .fg{margin-bottom:16px}
        .flabel{display:block;font-size:11px;font-weight:700;color:var(--navy);letter-spacing:.06em;text-transform:uppercase;margin-bottom:7px}
        .freq{color:var(--accent);margin-left:2px}
        .finput{width:100%;padding:12px 16px;border:1.5px solid var(--border);border-radius:var(--r);font-family:inherit;font-size:15px;color:var(--text);background:var(--white);transition:border-color .2s,box-shadow .2s;outline:none;-webkit-appearance:none}
        .finput:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,154,68,.1)}
        .finput::placeholder{color:var(--dim)}
        textarea.finput{resize:vertical;min-height:120px;line-height:1.6}
        .checkbox-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:20px}
        .checkbox-row input[type=checkbox]{width:16px;height:16px;flex-shrink:0;margin-top:3px;accent-color:var(--accent);cursor:pointer}
        .checkbox-row label{font-size:13px;color:var(--muted);cursor:pointer;line-height:1.55}
        .checkbox-row label a{color:var(--accent);text-decoration:underline}
        .fsubmit{width:100%;padding:16px;background:var(--accent);color:var(--white);border-radius:var(--r);font-family:inherit;font-size:16px;font-weight:700;cursor:pointer;transition:all .2s;border:none;display:flex;align-items:center;justify-content:center;gap:8px}
        .fsubmit:hover:not(:disabled){background:var(--accent-dk);transform:translateY(-1px);box-shadow:0 8px 24px rgba(0,154,68,.35)}
        .fsubmit:disabled{opacity:.6;cursor:not-allowed;transform:none}
        .form-footer-note{font-size:12px;color:var(--dim);text-align:center;margin-top:14px}
        .form-footer-note .acc{color:var(--accent)}
        .success-state{text-align:center;padding:48px 24px}
        .success-icon{width:72px;height:72px;border-radius:50%;background:rgba(0,154,68,.12);display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
        .success-h{font-size:24px;font-weight:700;color:var(--navy);margin-bottom:10px}
        .success-body{font-size:16px;color:var(--muted);line-height:1.65;max-width:400px;margin:0 auto 24px}
        .journey{background:var(--surface);padding:var(--sy) 0}
        .journey-head{text-align:center;margin-bottom:52px}
        .journey-head h2{font-size:clamp(24px,3vw,34px);font-weight:700;color:var(--navy);letter-spacing:-.025em}
        .journey-head p{color:var(--muted);font-size:16px;margin-top:10px}
        .journey-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap);position:relative}
        .journey-grid::before{content:'';position:absolute;top:36px;left:calc(16.67% + 20px);right:calc(16.67% + 20px);height:1px;background:var(--border);z-index:0}
        .journey-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:36px;text-align:center;position:relative;z-index:1;transition:transform .25s,box-shadow .25s,border-color .25s}
        .journey-card:hover{transform:translateY(-3px);box-shadow:var(--sh-lg);border-color:var(--accent)}
        .jc-num{width:72px;height:72px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;font-size:24px;font-weight:800;border:2px solid var(--border);background:var(--white);color:var(--navy);position:relative;z-index:1}
        .journey-card:last-child .jc-num{background:var(--accent);border-color:var(--accent);color:var(--white)}
        .jc-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
        .jc-title{font-size:18px;font-weight:700;color:var(--navy);margin-bottom:12px}
        .jc-body{font-size:14px;color:var(--muted);line-height:1.65}
        .jc-checks{margin-top:16px;display:flex;flex-direction:column;gap:8px;border-top:1px solid var(--border);padding-top:16px}
        .jcheck{display:flex;align-items:center;gap:8px;font-size:13px;color:var(--muted);text-align:left}
        .jcheck .ms{font-size:16px;color:var(--accent)}
        .security{background:var(--navy);padding:var(--sy) 0}
        .security-inner{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}
        .sec-label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:16px;display:block}
        .sec-h{font-size:clamp(24px,3vw,34px);font-weight:700;color:var(--white);letter-spacing:-.025em;margin-bottom:16px;line-height:1.3}
        .sec-body{font-size:16px;color:rgba(255,255,255,.55);line-height:1.72;margin-bottom:32px}
        .sec-badges{display:flex;gap:10px;flex-wrap:wrap}
        .sec-badge{padding:6px 14px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);border-radius:var(--r);font-size:11px;font-weight:700;color:rgba(255,255,255,.5);letter-spacing:.06em;text-transform:uppercase}
        .sec-features{display:flex;flex-direction:column;gap:16px}
        .sec-feat{display:flex;align-items:flex-start;gap:16px;padding:20px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:var(--r-lg)}
        .sec-feat-icon{width:40px;height:40px;border-radius:var(--r-md);background:rgba(0,154,68,.15);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .sec-feat-icon .ms{color:var(--accent);font-size:20px}
        .sec-feat-title{font-size:15px;font-weight:700;color:var(--white);margin-bottom:4px}
        .sec-feat-body{font-size:13px;color:rgba(255,255,255,.45);line-height:1.6}
        @media(max-width:1024px){.c-hero-inner{grid-template-columns:1fr}.hero-contact-card{display:none}.form-section-inner{grid-template-columns:1fr}.form-sidebar-col{display:none}.security-inner{grid-template-columns:1fr}.journey-grid::before{display:none}}
        @media(max-width:768px){.form-row{grid-template-columns:1fr}.journey-grid{grid-template-columns:1fr}.form-card{padding:32px 24px}}
      `}</style>

      <ScrollReveal />

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap c-hero-inner">
          <div>
            <div className="hero-label reveal">
              <span className="ms" style={{ fontSize: 13 }}>hub</span>
              Demande d&apos;Expertise
            </div>
            <h1 className="hero-h1 reveal d1">
              Engagez<br />l&apos;<span className="acc">expertise souveraine</span>
            </h1>
            <p className="hero-desc reveal d2">
              Décrivez votre projet stratégique. Notre équipe analyse votre demande et vous propose un diagnostic initial dans les 24 heures ouvrables.
            </p>
            <div className="hero-trust reveal d3">
              <div className="htrust-item"><span className="ms ms-fill">verified_user</span>Confidentialité de niveau étatique</div>
              <div className="htrust-item"><span className="ms ms-fill">schedule</span>Réponse sous 24h ouvrables</div>
              <div className="htrust-item"><span className="ms ms-fill">shield</span>Données traitées en environnement souverain</div>
            </div>
          </div>
          <div className="hero-contact-card reveal d1">
            <div className="hcc-title">Coordonnées du Cabinet</div>
            <div className="hcc-items">
              <div className="hcc-item">
                <div className="hcc-icon"><span className="ms">location_on</span></div>
                <div>
                  <div className="hcc-label">Adresse</div>
                  <div className="hcc-value">BP 30162 Ouaga Pissy<br />Ouagadougou, Burkina Faso</div>
                </div>
              </div>
              <div className="hcc-divider" />
              <div className="hcc-item">
                <div className="hcc-icon"><span className="ms">mail</span></div>
                <div>
                  <div className="hcc-label">Email</div>
                  <div className="hcc-value">contact@cased-bf.com</div>
                </div>
              </div>
              <div className="hcc-divider" />
              <div className="hcc-item">
                <div className="hcc-icon"><span className="ms">call</span></div>
                <div>
                  <div className="hcc-label">Téléphones</div>
                  <div className="hcc-value">+226 25 43 11 44<br />+226 70 20 50 57 / 54 84 32 32</div>
                </div>
              </div>
              <div className="hcc-divider" />
              <div className="hcc-item">
                <div className="hcc-icon"><span className="ms">language</span></div>
                <div>
                  <div className="hcc-label">Site Web</div>
                  <div className="hcc-value">cased-bf.com</div>
                </div>
              </div>
            </div>
            <div className="response-badge">
              <span className="ms ms-fill">schedule</span>
              <span>Réponse garantie sous 24 heures ouvrables</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="form-section" id="formulaire">
        <div className="wrap form-section-inner">
          <div className="form-sidebar-col reveal">
            <h2 className="sidebar-h">Compléter votre brief projet</h2>
            <p className="sidebar-desc">Renseignez ce formulaire pour initier votre consultation stratégique. Plus votre description est précise, plus notre réponse sera adaptée à vos enjeux.</p>
            <div className="sidebar-features">
              <div className="sf-item"><div className="sf-dot" /><div className="sf-text"><strong>Analyse de souveraineté</strong> — Diagnostic initial offert sur votre secteur d&apos;intervention</div></div>
              <div className="sf-item"><div className="sf-dot" /><div className="sf-text"><strong>Confidentialité totale</strong> — Chaque brief est chiffré dès réception</div></div>
              <div className="sf-item"><div className="sf-dot" /><div className="sf-text"><strong>Réponse personnalisée</strong> — Pas de réponse générique, une équipe dédiée à votre dossier</div></div>
              <div className="sf-item"><div className="sf-dot" /><div className="sf-text"><strong>Expertise multisectorielle</strong> — Mines, Énergie, Environnement, Juridique</div></div>
            </div>
            <div className="sidebar-legal">
              <div className="sl-label">Identifiants Légaux</div>
              <div className="sl-badges">
                <div className="sl-badge"><span className="ms ms-fill" style={{ fontSize: 12, verticalAlign: 'middle', color: 'var(--accent)' }}>verified</span> RCCM : BJ-COO-01-2024-B13-00042</div>
                <div className="sl-badge"><span className="ms ms-fill" style={{ fontSize: 12, verticalAlign: 'middle', color: 'var(--accent)' }}>verified</span> IFU : 3202415487901</div>
              </div>
            </div>
          </div>

          <div className="reveal d1">
            <div className="form-card">
              {!submitted ? (
                <>
                  <h3 className="form-title">Demande de Consultation Stratégique</h3>
                  <p className="form-subtitle">Mobilisez notre laboratoire d&apos;idées souveraines pour vos projets de développement multisectoriels.</p>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="form-row">
                      <div className="fg">
                        <label className="flabel" htmlFor="c-nom">Nom Complet<span className="freq">*</span></label>
                        <input id="c-nom" className="finput" type="text" name="nom" placeholder="Jean-Luc Kaboré" required />
                      </div>
                      <div className="fg">
                        <label className="flabel" htmlFor="c-org">Organisation / Ministère<span className="freq">*</span></label>
                        <input id="c-org" className="finput" type="text" name="organisation" placeholder="Ministère du Plan" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="fg">
                        <label className="flabel" htmlFor="c-email">Email Professionnel<span className="freq">*</span></label>
                        <input id="c-email" className="finput" type="email" name="email" placeholder="j.dupont@institution.gov" required onChange={e => setEmail(e.target.value)} />
                      </div>
                      <div className="fg">
                        <label className="flabel" htmlFor="c-tel">Téléphone<span className="freq">*</span></label>
                        <input id="c-tel" className="finput" type="tel" name="telephone" placeholder="+226 XX XX XX XX" required />
                      </div>
                    </div>
                    <div className="fg">
                      <label className="flabel" htmlFor="c-secteur">Secteur d&apos;Intervention<span className="freq">*</span></label>
                      <select id="c-secteur" className="finput" name="secteur" required>
                        <option value="">Sélectionnez votre secteur…</option>
                        <option>Mines &amp; Souveraineté Industrielle</option>
                        <option>Environnement &amp; RSE Endogène</option>
                        <option>Énergies Renouvelables &amp; Autonomie</option>
                        <option>Art de la Validité — Juridique &amp; Conformité</option>
                        <option>Gouvernance &amp; Cadre Normatif</option>
                        <option>Modélisation Financière &amp; Macroéconomie</option>
                        <option>Partenariat Institutionnel AES</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div className="fg">
                      <label className="flabel" htmlFor="c-projet">Description Synthétique du Projet<span className="freq">*</span></label>
                      <textarea id="c-projet" className="finput" name="projet" placeholder="Quels sont les enjeux stratégiques de votre sollicitation ? Décrivez le contexte, les objectifs et les défis principaux de votre mission…" required />
                    </div>
                    <div className="checkbox-row">
                      <input type="checkbox" id="rgpd" name="rgpd" required />
                      <label htmlFor="rgpd">J&apos;accepte la politique de confidentialité panafricaine du CASED et consens au traitement de mes données aux fins de réponse à ma demande de consultation. <Link href="/mentions-legales#confidentialite">Lire la politique</Link>.</label>
                    </div>
                    <button className="fsubmit" type="submit" disabled={loading}>
                      <span className="ms" style={{ fontSize: 20 }}>{loading ? 'hourglass_empty' : 'send'}</span>
                      {loading ? 'Traitement en cours…' : 'Initier la Consultation'}
                    </button>
                    <p className="form-footer-note">
                      <span className="acc">*</span> Champs obligatoires — Réponse garantie sous 24h ouvrables — Confidentialité totale
                    </p>
                  </form>
                </>
              ) : (
                <div className="success-state">
                  <div className="success-icon"><span className="ms ms-fill" style={{ fontSize: 36, color: 'var(--accent)' }}>check_circle</span></div>
                  <h3 className="success-h">Demande envoyée avec succès</h3>
                  <p className="success-body">Votre brief a été transmis à notre équipe. Vous recevrez une réponse personnalisée à <strong>{email || 'votre adresse email'}</strong> dans les 24 heures ouvrables.</p>
                  <Link className="btn btn-outline" href="/">Retour à l&apos;accueil</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="journey">
        <div className="wrap">
          <div className="journey-head reveal">
            <h2>Votre Parcours avec CASED</h2>
            <p>Trois étapes simples de votre demande à la livraison stratégique.</p>
          </div>
          <div className="journey-grid">
            <div className="journey-card reveal">
              <div className="jc-num">01</div>
              <div className="jc-label">Étape 01</div>
              <div className="jc-title">Diagnostic de Souveraineté</div>
              <p className="jc-body">Analyse approfondie des écarts stratégiques et identification des vulnérabilités institutionnelles pour définir un socle solide d&apos;intervention.</p>
              <div className="jc-checks">
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Audit multisectoriel</div>
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Cartographie des risques</div>
              </div>
            </div>
            <div className="journey-card reveal d1">
              <div className="jc-num">02</div>
              <div className="jc-label">Étape 02</div>
              <div className="jc-title">Architecture Stratégique</div>
              <p className="jc-body">Conception de solutions endogènes sur mesure, alignées sur les réalités juridiques et les ambitions de croissance souveraine du pays.</p>
              <div className="jc-checks">
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Plan directeur tactique</div>
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Cadre légal optimisé</div>
              </div>
            </div>
            <div className="journey-card reveal d2">
              <div className="jc-num">03</div>
              <div className="jc-label">Étape 03</div>
              <div className="jc-title">Exécution &amp; Impact</div>
              <p className="jc-body">Déploiement opérationnel, monitoring rigoureux des indicateurs de performance souveraine et transfert de compétences aux équipes nationales.</p>
              <div className="jc-checks">
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Suivi de performance</div>
                <div className="jcheck"><span className="ms ms-fill" style={{ fontSize: 16 }}>check_circle</span>Transfert de compétences</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="security">
        <div className="wrap security-inner">
          <div className="reveal">
            <span className="sec-label">Souveraineté des Données</span>
            <h2 className="sec-h">Confidentialité Institutionnelle Garantie</h2>
            <p className="sec-body">Chaque interaction au sein de CASED est protégée par des protocoles de sécurité de niveau étatique. Vos briefs projets sont traités dans un environnement isolé et souverain, sans transmission à des tiers.</p>
            <div className="sec-badges">
              <span className="sec-badge">RCCM : BJ-COO-01-2024-B13-00042</span>
              <span className="sec-badge">IFU : 3202415487901</span>
            </div>
          </div>
          <div className="sec-features reveal d1">
            <div className="sec-feat">
              <div className="sec-feat-icon"><span className="ms">lock_person</span></div>
              <div>
                <div className="sec-feat-title">Anonymisation Totale</div>
                <p className="sec-feat-body">Les données sensibles sont chiffrées dès l&apos;initiation du brief. Aucune information n&apos;est stockée en clair sur nos serveurs.</p>
              </div>
            </div>
            <div className="sec-feat">
              <div className="sec-feat-icon"><span className="ms">verified</span></div>
              <div>
                <div className="sec-feat-title">Protocole Souverain</div>
                <p className="sec-feat-body">Traitement de vos données conformément à la charte de confidentialité panafricaine CASED et aux cadres juridiques nationaux.</p>
              </div>
            </div>
            <div className="sec-feat">
              <div className="sec-feat-icon"><span className="ms">schedule</span></div>
              <div>
                <div className="sec-feat-title">Réponse en 24h</div>
                <p className="sec-feat-body">Notre équipe analyse chaque brief individuellement et vous adresse une réponse personnalisée sous 24 heures ouvrables.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
