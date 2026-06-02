import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'À Propos | CASED',
  description: 'Think Tank et cabinet d\'ingénierie publique fondé en 2026 à Ouagadougou, au service de la souveraineté économique de l\'AES.',
};

export default function AProposPage() {
  return (
    <>
      <style>{`
        .page-hero{padding-top:76px;background:var(--navy);position:relative;overflow:hidden}
        .page-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.18) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
        .ap-hero-inner{position:relative;z-index:1;padding-top:80px;padding-bottom:80px;display:grid;grid-template-columns:1fr 1fr;gap:72px;align-items:center}
        .hero-label{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:rgba(0,154,68,.18);color:#7FCF9A;border:1px solid rgba(0,154,68,.25);margin-bottom:20px}
        .hero-h1{font-size:clamp(32px,4.5vw,52px);font-weight:800;color:var(--white);letter-spacing:-.035em;line-height:1.1;margin-bottom:20px}
        .hero-h1 .acc{color:var(--accent)}
        .hero-desc{font-size:17px;line-height:1.72;color:rgba(255,255,255,.6);margin-bottom:36px}
        .founded-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:var(--r-xl);padding:40px}
        .founded-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:24px}
        .fstat{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:var(--r-md);padding:20px;text-align:center}
        .fstat-num{font-size:32px;font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1;margin-bottom:6px}
        .fstat-lbl{font-size:10px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em}
        .aes-badge-card{display:flex;align-items:center;gap:16px;background:rgba(0,154,68,.1);border:1px solid rgba(0,154,68,.2);border-radius:var(--r-lg);padding:18px}
        .aes-badge-text{font-size:14px;color:rgba(255,255,255,.65);line-height:1.5}
        .aes-badge-text strong{color:var(--white);display:block;margin-bottom:3px}
        .legal-band{background:var(--surface2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:24px 0}
        .legal-inner{display:flex;align-items:center;justify-content:center;gap:32px;flex-wrap:wrap}
        .legal-item{display:flex;align-items:center;gap:8px;font-size:12px;font-weight:700;color:var(--muted);letter-spacing:.04em}
        .legal-sep{width:1px;height:18px;background:var(--border)}
        .shd{margin-bottom:52px}
        .shd .slbl{display:block;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
        .shd h2{font-size:clamp(26px,3.2vw,36px);font-weight:700;color:var(--navy);letter-spacing:-.025em;line-height:1.2}
        .vm-grid{display:grid;grid-template-columns:1fr 1fr;gap:var(--gap)}
        .vm-card{border-radius:var(--r-xl);padding:48px;position:relative;overflow:hidden}
        .vm-card-vision{background:var(--navy-deep)}
        .vm-card-mission{background:var(--accent)}
        .vm-card::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.08) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
        .vm-inner{position:relative;z-index:1}
        .vm-tag{font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5);margin-bottom:16px;display:block}
        .vm-h{font-size:28px;font-weight:800;color:var(--white);letter-spacing:-.025em;margin-bottom:16px}
        .vm-text{font-size:16px;line-height:1.72;color:rgba(255,255,255,.7)}
        .vm-text em{color:var(--white);font-style:normal;font-weight:600}
        .aes-inner-grid{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}
        .aes-text p{font-size:17px;line-height:1.72;color:var(--muted);margin-bottom:20px}
        .context-items{display:flex;flex-direction:column;gap:16px;margin-top:32px}
        .ctx-item{display:flex;align-items:flex-start;gap:16px;padding:20px;background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg)}
        .ctx-icon{width:40px;height:40px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .ctx-icon-green{background:rgba(0,154,68,.1)}.ctx-icon-green .ms{color:var(--accent)}
        .ctx-icon-navy{background:rgba(26,43,75,.08)}.ctx-icon-navy .ms{color:var(--navy)}
        .ctx-title{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px}
        .ctx-body{font-size:14px;color:var(--muted);line-height:1.6}
        .aes-visual-col{display:flex;flex-direction:column;gap:16px}
        .aes-logo-card{background:var(--navy);border-radius:var(--r-xl);padding:40px;text-align:center}
        .aes-logo-label{font-size:13px;font-weight:700;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.1em}
        .aes-stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
        .aes-mini-stat{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:20px;text-align:center}
        .ams-num{font-size:28px;font-weight:800;color:var(--navy);letter-spacing:-.04em;line-height:1;margin-bottom:5px}
        .ams-lbl{font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.08em}
        .valeurs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap)}
        .valeur-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:32px;text-align:center;transition:transform .25s,box-shadow .25s,border-color .25s}
        .valeur-card:hover{transform:translateY(-3px);box-shadow:var(--sh-lg);border-color:var(--accent)}
        .valeur-icon{width:56px;height:56px;border-radius:50%;background:rgba(0,154,68,.1);display:flex;align-items:center;justify-content:center;margin:0 auto 16px}
        .valeur-icon .ms{font-size:26px;color:var(--accent)}
        .valeur-title{font-size:16px;font-weight:700;color:var(--navy);margin-bottom:10px}
        .valeur-body{font-size:14px;color:var(--muted);line-height:1.65}
        .equipe-note{background:var(--navy);border-radius:var(--r-xl);padding:56px;display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center;position:relative;overflow:hidden}
        .equipe-note::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.15) 1px,transparent 1px);background-size:28px 28px;pointer-events:none}
        .equipe-text{position:relative;z-index:1}
        .equipe-label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:16px;display:block}
        .equipe-h{font-size:clamp(22px,2.5vw,30px);font-weight:700;color:var(--white);letter-spacing:-.025em;margin-bottom:16px;line-height:1.3}
        .equipe-body{font-size:16px;color:rgba(255,255,255,.55);line-height:1.72;max-width:560px}
        .equipe-visual{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:8px}
        .equipe-num{font-size:64px;font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1}
        .equipe-num-lbl{font-size:12px;font-weight:700;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:.1em;text-align:center}
        .cta-block{background:var(--navy-deep);padding:var(--sy) 0;text-align:center;position:relative;overflow:hidden}
        .cta-block::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.18) 1px,transparent 1px);background-size:32px 32px;pointer-events:none}
        .cta-inner{position:relative;z-index:1}
        .cta-h{font-size:clamp(28px,4vw,44px);font-weight:800;color:var(--white);letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
        .cta-h .acc{color:var(--accent)}
        .cta-sub{font-size:17px;color:rgba(255,255,255,.5);max-width:560px;margin:0 auto 36px;line-height:1.65}
        .cta-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        @media(max-width:1024px){.ap-hero-inner{grid-template-columns:1fr}.founded-card{display:none}.vm-grid{grid-template-columns:1fr}.aes-inner-grid{grid-template-columns:1fr}.valeurs-grid{grid-template-columns:repeat(2,1fr)}.equipe-note{grid-template-columns:1fr}.equipe-visual{display:none}}
        @media(max-width:768px){.valeurs-grid{grid-template-columns:1fr 1fr}.legal-sep{display:none}}
        @media(max-width:480px){.valeurs-grid{grid-template-columns:1fr}.aes-stats-row{grid-template-columns:1fr}}
      `}</style>

      <ScrollReveal />

      {/* Hero */}
      <section className="page-hero">
        <div className="wrap ap-hero-inner">
          <div>
            <div className="hero-label reveal">
              <span className="ms" style={{ fontSize: 13 }}>corporate_fare</span>
              Cabinet Fondé en 2026
            </div>
            <h1 className="hero-h1 reveal d1">
              Qui sommes-<br />nous — <span className="acc">CASED</span>
            </h1>
            <p className="hero-desc reveal d2">
              Think Tank et cabinet d&apos;ingénierie publique, nous sommes l&apos;outil stratégique de la souveraineté économique du Burkina Faso et de l&apos;Espace AES. Jeunes, agiles, et résolument patriotes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }} className="reveal d3">
              <Link className="btn btn-primary btn-lg" href="/consultation">Travaillons ensemble</Link>
              <Link className="btn btn-ghost btn-lg" href="/expertise">Nos expertises</Link>
            </div>
          </div>
          <div className="reveal d2">
            <div className="founded-card">
              <div className="founded-stats">
                <div className="fstat"><div className="fstat-num">2026</div><div className="fstat-lbl">Année de fondation</div></div>
                <div className="fstat"><div className="fstat-num">4</div><div className="fstat-lbl">Domaines d&apos;expertise</div></div>
                <div className="fstat"><div className="fstat-num">3</div><div className="fstat-lbl">Nations AES couvertes</div></div>
                <div className="fstat"><div className="fstat-num">100%</div><div className="fstat-lbl">Engagement endogène</div></div>
              </div>
              <div className="aes-badge-card">
                <Image src="/logo_aes.webp" alt="Logo Confédération AES" width={52} height={52} style={{ height: 52, width: 'auto', objectFit: 'contain', flexShrink: 0 }} />
                <div className="aes-badge-text">
                  <strong>Confédération des États du Sahel</strong>
                  Partenaire stratégique AES — Mali, Burkina Faso, Niger
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Band */}
      <div className="legal-band">
        <div className="wrap legal-inner">
          <div className="legal-item"><span className="ms ms-fill" style={{ fontSize: 15 }}>verified</span>RCCM : BJ-COO-01-2024-B13-00042</div>
          <div className="legal-sep" />
          <div className="legal-item"><span className="ms ms-fill" style={{ fontSize: 15 }}>verified</span>IFU : 3202415487901</div>
          <div className="legal-sep" />
          <div className="legal-item"><span className="ms ms-fill" style={{ fontSize: 15 }}>location_on</span>BP 30162 Ouaga Pissy, Ouagadougou</div>
          <div className="legal-sep" />
          <div className="legal-item"><span className="ms ms-fill" style={{ fontSize: 15 }}>language</span>cased-bf.com</div>
        </div>
      </div>

      {/* Vision & Mission */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Notre Raison d&apos;Être</span>
            <h2>Vision &amp; Mission</h2>
            <div className="accentbar" />
          </div>
          <div className="vm-grid">
            <div className="vm-card vm-card-vision reveal">
              <div className="vm-inner">
                <span className="vm-tag">Notre Vision</span>
                <h3 className="vm-h">Devenir le partenaire d&apos;ingénierie de référence pour la transformation structurelle des économies de l&apos;Espace AES.</h3>
                <p className="vm-text">Nous aspirons à un Burkina Faso et une Afrique du Sahel où les décisions stratégiques sont guidées par une <em>expertise endogène souveraine</em>, où la valeur créée par les ressources naturelles reste sur le continent, et où les institutions africaines sont architectes de leur propre développement.</p>
              </div>
            </div>
            <div className="vm-card vm-card-mission reveal d1">
              <div className="vm-inner">
                <span className="vm-tag">Notre Mission</span>
                <h3 className="vm-h">Propulser une ingénierie du développement rigoureuse, patriotique et ancrée dans les réalités du terrain sahélien.</h3>
                <p className="vm-text">Allier <em>rigueur scientifique internationale</em> et ancrage territorial profond pour produire des solutions stratégiques qui durent — des solutions que le Burkina Faso et l&apos;AES peuvent s&apos;approprier, opérer et améliorer en toute autonomie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contexte AES */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Ancrage Géopolitique</span>
            <h2>Notre contexte stratégique</h2>
            <div className="accentbar" />
          </div>
          <div className="aes-inner-grid">
            <div className="aes-text reveal">
              <p>Le CASED naît dans un contexte de rupture historique. La Confédération des États du Sahel — Mali, Burkina Faso, Niger — a ouvert un espace inédit pour une ingénierie publique véritablement souveraine, débarrassée des conditionnalités extérieures.</p>
              <p>Nous sommes l&apos;outil stratégique de cette transformation. Chacune de nos interventions est calibrée sur les objectifs du <strong>PND RELANCE 2026–2030</strong> (36 190,7 milliards FCFA) et les ambitions de la Révolution Progressiste Populaire du Capitaine Ibrahim Traoré.</p>
              <div className="context-items">
                <div className="ctx-item">
                  <div className="ctx-icon ctx-icon-green"><span className="ms">hub</span></div>
                  <div>
                    <div className="ctx-title">Confédération AES — Décembre 2025</div>
                    <p className="ctx-body">Membre de la Confédération des États du Sahel depuis décembre 2025. Nos analyses couvrent l&apos;intégralité de l&apos;espace Mali-Burkina-Niger.</p>
                  </div>
                </div>
                <div className="ctx-item">
                  <div className="ctx-icon ctx-icon-navy"><span className="ms">trending_up</span></div>
                  <div>
                    <div className="ctx-title">PND RELANCE 2026–2030</div>
                    <p className="ctx-body">Partenaire du Plan National de Développement. Nos recommandations sont directement alignées sur les 36 190,7 milliards FCFA mobilisés pour la relance nationale.</p>
                  </div>
                </div>
                <div className="ctx-item">
                  <div className="ctx-icon ctx-icon-green"><span className="ms">flag</span></div>
                  <div>
                    <div className="ctx-title">Révolution Progressiste Populaire</div>
                    <p className="ctx-body">Alignement sur les orientations stratégiques de la RPP du Capitaine Traoré — souveraineté économique, patriotisme technologique, développement endogène.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="aes-visual-col reveal d1">
              <div className="aes-logo-card">
                <Image src="/logo_aes.webp" alt="Logo Confédération AES" width={120} height={120} style={{ height: 120, width: 'auto', objectFit: 'contain', margin: '0 auto 16px' }} />
                <div className="aes-logo-label">Confédération des États du Sahel</div>
              </div>
              <div className="aes-stats-row">
                <div className="aes-mini-stat">
                  <div className="ams-num">3</div>
                  <div className="ams-lbl">Nations</div>
                </div>
                <div className="aes-mini-stat">
                  <div className="ams-num" style={{ color: 'var(--accent)' }}>2025</div>
                  <div className="ams-lbl">Fondation</div>
                </div>
                <div className="aes-mini-stat">
                  <div className="ams-num">36T</div>
                  <div className="ams-lbl">FCFA PND</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="section-y" style={{ background: 'var(--white)' }}>
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Nos Valeurs</span>
            <h2>Ce en quoi nous croyons</h2>
            <div className="accentbar" />
          </div>
          <div className="valeurs-grid">
            <div className="valeur-card reveal">
              <div className="valeur-icon"><span className="ms">psychology</span></div>
              <div className="valeur-title">Rigueur Scientifique</div>
              <p className="valeur-body">Chaque recommandation est fondée sur des données empiriques, des modèles économétriques et une analyse juridique rigoureuse.</p>
            </div>
            <div className="valeur-card reveal d1">
              <div className="valeur-icon"><span className="ms">flag</span></div>
              <div className="valeur-title">Patriotisme Stratégique</div>
              <p className="valeur-body">L&apos;intérêt supérieur de la nation guide chacune de nos interventions, sans compromis avec des agendas extérieurs.</p>
            </div>
            <div className="valeur-card reveal d2">
              <div className="valeur-icon"><span className="ms">handshake</span></div>
              <div className="valeur-title">Intégrité Absolue</div>
              <p className="valeur-body">Secret professionnel de niveau étatique. Vos projets et stratégies restent dans un environnement isolé et souverain.</p>
            </div>
            <div className="valeur-card reveal d3">
              <div className="valeur-icon"><span className="ms">school</span></div>
              <div className="valeur-title">Transfert Endogène</div>
              <p className="valeur-body">Chaque mission renforce les capacités locales. Nous ne créons pas de dépendance — nous bâtissons l&apos;autonomie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="shd reveal">
            <span className="slbl">Notre Équipe</span>
            <h2>Des experts au service de la souveraineté</h2>
            <div className="accentbar" />
          </div>
          <div className="equipe-note reveal">
            <div className="equipe-text">
              <span className="equipe-label">Cabinet en construction</span>
              <h3 className="equipe-h">Une équipe pluridisciplinaire en cours de constitution</h3>
              <p className="equipe-body">CASED réunit des experts burkinabè et panafricains en économie, droit minier, ingénierie énergétique, finance publique et géopolitique sahélienne. Notre équipe de direction et nos profils seront publiés prochainement. Nous recrutons activement des talents alignés sur notre vision souveraine.</p>
              <Link className="btn btn-primary" href="/consultation" style={{ marginTop: 28, display: 'inline-flex' }}>Rejoindre la mission</Link>
            </div>
            <div className="equipe-visual">
              <div className="equipe-num">2026</div>
              <div className="equipe-num-lbl">Fondation<br />Ouagadougou</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-block">
        <div className="wrap cta-inner reveal">
          <h2 className="cta-h">Construisons ensemble<br /><span className="acc">l&apos;autonomie de demain</span></h2>
          <p className="cta-sub">Un projet stratégique, une question sur nos expertises ou une opportunité de partenariat — notre équipe vous répond sous 24 heures.</p>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-lg" href="/consultation">Initier une consultation</Link>
            <Link className="btn btn-ghost btn-lg" href="/expertise">Nos domaines d&apos;expertise</Link>
          </div>
        </div>
      </section>
    </>
  );
}
