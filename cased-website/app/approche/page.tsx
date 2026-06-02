import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Notre Approche | CASED',
  description: 'Notre méthodologie de rupture — Co-construction, financement innovant, patriotisme technologique.',
};

export default function ApprochePage() {
  return (
    <>
      <ScrollReveal />
      <style>{`
        .page-hero{padding-top:76px;background:var(--navy-deep);position:relative;overflow:hidden}
        .page-hero::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.2) 1px,transparent 1px);background-size:36px 36px;pointer-events:none}
        .page-hero-inner{position:relative;z-index:1;padding-top:72px;padding-bottom:72px;max-width:800px}
        .page-hero-label{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;background:rgba(0,154,68,.18);color:#7FCF9A;border:1px solid rgba(0,154,68,.25);margin-bottom:20px}
        .page-h1{font-size:clamp(32px,4.5vw,54px);font-weight:800;color:var(--white);letter-spacing:-.035em;line-height:1.1;margin-bottom:20px}
        .page-h1 .acc{color:var(--accent)}
        .page-intro{font-size:18px;line-height:1.72;color:rgba(255,255,255,.6);max-width:680px}
        .principes-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--gap)}
        .principe-card{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:40px;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
        .principe-card:hover{transform:translateY(-3px);box-shadow:var(--sh-lg);border-color:var(--accent)}
        .pc-num{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:16px}
        .pc-icon{width:52px;height:52px;border-radius:var(--r-md);background:rgba(0,154,68,.1);display:flex;align-items:center;justify-content:center;margin-bottom:20px}
        .pc-icon .ms{font-size:26px;color:var(--accent)}
        .pc-title{font-size:20px;font-weight:700;color:var(--navy);margin-bottom:12px}
        .pc-body{font-size:15px;color:var(--muted);line-height:1.7}
        .etapes{background:var(--navy);padding:var(--sy) 0}
        .etapes-head{text-align:center;margin-bottom:60px}
        .etapes-head h2{font-size:clamp(26px,3.2vw,36px);font-weight:700;color:var(--white);letter-spacing:-.025em}
        .etapes-head p{color:rgba(255,255,255,.45);font-size:16px;margin-top:10px;max-width:600px;margin-left:auto;margin-right:auto}
        .etapes-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:0;position:relative}
        .etapes-grid::before{content:'';position:absolute;top:40px;left:10%;right:10%;height:1px;background:rgba(255,255,255,.1);z-index:0}
        .etape-item{display:flex;flex-direction:column;align-items:center;text-align:center;padding:0 20px;position:relative;z-index:1}
        .etape-num{width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:800;margin-bottom:24px;border:2px solid rgba(255,255,255,.1);background:var(--navy)}
        .etape-item:nth-child(5) .etape-num{background:var(--accent);border-color:var(--accent);color:var(--white)}
        .etape-item:not(:nth-child(5)) .etape-num{color:var(--accent)}
        .etape-label{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
        .etape-title{font-size:16px;font-weight:700;color:var(--white);margin-bottom:10px;line-height:1.3}
        .etape-body{font-size:13px;color:rgba(255,255,255,.42);line-height:1.65}
        .diff-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center}
        .diff-visual{background:var(--navy-deep);border-radius:var(--r-xl);padding:48px;text-align:center;position:relative;overflow:hidden}
        .diff-visual::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.2) 1px,transparent 1px);background-size:28px 28px}
        .diff-visual-inner{position:relative;z-index:1}
        .diff-big{font-size:72px;font-weight:800;color:var(--accent);letter-spacing:-.04em;line-height:1}
        .diff-sub{font-size:14px;font-weight:600;color:rgba(255,255,255,.5);text-transform:uppercase;letter-spacing:.1em;margin-top:8px}
        .diff-divider{width:40px;height:2px;background:rgba(255,255,255,.15);margin:24px auto}
        .diff-list{display:flex;flex-direction:column;gap:20px}
        .diff-item{display:flex;align-items:flex-start;gap:16px;padding:20px;background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);transition:border-color .2s}
        .diff-item:hover{border-color:var(--accent)}
        .diff-check{width:32px;height:32px;border-radius:50%;background:rgba(0,154,68,.1);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .diff-check .ms{font-size:18px;color:var(--accent)}
        .diff-item-title{font-size:15px;font-weight:700;color:var(--navy);margin-bottom:4px}
        .diff-item-body{font-size:14px;color:var(--muted);line-height:1.6}
        .cta-block{background:var(--accent);padding:var(--sy) 0;text-align:center;position:relative;overflow:hidden}
        .cta-block::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.12) 1px,transparent 1px);background-size:32px 32px;pointer-events:none}
        .cta-inner{position:relative;z-index:1}
        .cta-h{font-size:clamp(28px,4vw,44px);font-weight:800;color:var(--white);letter-spacing:-.03em;line-height:1.1;margin-bottom:16px}
        .cta-sub{font-size:17px;color:rgba(255,255,255,.75);max-width:560px;margin:0 auto 36px;line-height:1.65}
        .cta-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        @media(max-width:1024px){.principes-grid{grid-template-columns:1fr 1fr}.etapes-grid{grid-template-columns:1fr 1fr;gap:32px}.etapes-grid::before{display:none}.diff-grid{grid-template-columns:1fr}}
        @media(max-width:768px){.principes-grid{grid-template-columns:1fr}.etapes-grid{grid-template-columns:1fr}}
      `}</style>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="wrap">
          <div className="page-hero-inner">
            <div className="page-hero-label">
              <span className="ms">insights</span>
              Méthodologie
            </div>
            <h1 className="page-h1">
              Une approche de <span className="acc">rupture</span><br />
              par design souverain
            </h1>
            <p className="page-intro">
              CASED ne reproduit pas les modèles importés. Notre méthodologie est co-construite avec les
              réalités institutionnelles, culturelles et géopolitiques de l&apos;espace AES — pour des
              solutions qui durent.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Principles */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="slabel">Nos principes fondateurs</div>
            <h2>Trois piliers d&apos;une <span style={{ color: 'var(--accent)' }}>méthodologie inédite</span></h2>
          </div>
          <div className="principes-grid" style={{ marginTop: '48px' }}>
            <div className="principe-card reveal d1">
              <div className="pc-num">Principe 01</div>
              <div className="pc-icon"><span className="ms">groups</span></div>
              <div className="pc-title">Co-Construction</div>
              <p className="pc-body">
                Chaque solution est élaborée en collaboration directe avec les parties prenantes nationales.
                Nous n&apos;imposons pas de cadres externes — nous construisons avec les institutions, les
                décideurs et les experts locaux pour garantir l&apos;appropriation durable des résultats.
              </p>
            </div>
            <div className="principe-card reveal d2">
              <div className="pc-num">Principe 02</div>
              <div className="pc-icon"><span className="ms">account_balance</span></div>
              <div className="pc-title">Financement Innovant</div>
              <p className="pc-body">
                Nous structurons des mécanismes de financement alternatifs aux circuits traditionnels
                conditionnels. Obligations souveraines, partenariats Sud-Sud, mobilisation des ressources
                nationales : notre ingénierie financière préserve la pleine souveraineté décisionnelle.
              </p>
            </div>
            <div className="principe-card reveal d3">
              <div className="pc-num">Principe 03</div>
              <div className="pc-icon"><span className="ms">public</span></div>
              <div className="pc-title">Patriotisme Technologique</div>
              <p className="pc-body">
                Priorité systématique aux solutions technologiques endogènes et aux compétences nationales.
                Chaque projet intègre un volet de transfert de savoir-faire pour construire une autonomie
                technologique pérenne au sein de l&apos;espace AES.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Steps Cycle */}
      <section className="etapes">
        <div className="wrap">
          <div className="etapes-head reveal">
            <h2>Notre cycle d&apos;intervention en 5 étapes</h2>
            <p>Un processus rigoureux, de l&apos;audit initial à la supervision de l&apos;impact — conçu pour garantir des résultats souverains et mesurables.</p>
          </div>
          <div className="etapes-grid">
            <div className="etape-item reveal d1">
              <div className="etape-num">01</div>
              <div className="etape-label">Étape 1</div>
              <div className="etape-title">Diagnostic de Souveraineté</div>
              <p className="etape-body">
                Analyse des écarts stratégiques, cartographie des risques institutionnels et identification
                des vulnérabilités dans la chaîne de valeur nationale.
              </p>
            </div>
            <div className="etape-item reveal d2">
              <div className="etape-num">02</div>
              <div className="etape-label">Étape 2</div>
              <div className="etape-title">Architecture Stratégique</div>
              <p className="etape-body">
                Conception de solutions endogènes sur mesure, alignées sur les réalités juridiques locales
                et les ambitions de croissance souveraine du pays.
              </p>
            </div>
            <div className="etape-item reveal d2">
              <div className="etape-num">03</div>
              <div className="etape-label">Étape 3</div>
              <div className="etape-title">Modélisation Financière</div>
              <p className="etape-body">
                Structuration des mécanismes de financement, optimisation des ressources nationales et
                mobilisation de partenariats alternatifs aux circuits traditionnels.
              </p>
            </div>
            <div className="etape-item reveal d3">
              <div className="etape-num">04</div>
              <div className="etape-label">Étape 4</div>
              <div className="etape-title">Sécurisation Normative</div>
              <p className="etape-body">
                Validation juridique et réglementaire de chaque étape, garantissant la conformité aux
                cadres AES, nationaux et aux standards internationaux d&apos;investissement.
              </p>
            </div>
            <div className="etape-item reveal d3">
              <div className="etape-num">05</div>
              <div className="etape-label">Étape 5</div>
              <div className="etape-title">Supervision de l&apos;Impact</div>
              <p className="etape-body">
                Monitoring continu des indicateurs de performance souveraine, transfert de compétences aux
                équipes nationales et capitalisation des apprentissages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Différenciateurs */}
      <section className="section-y" style={{ background: 'var(--surface)' }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: '48px' }}>
            <div className="slabel">Ce qui nous distingue</div>
            <h2>Nos <span style={{ color: 'var(--accent)' }}>différenciateurs</span> clés</h2>
          </div>
          <div className="diff-grid">
            <div className="diff-visual reveal d1">
              <div className="diff-visual-inner">
                <div className="diff-big">100%</div>
                <div className="diff-sub">Endogène par design</div>
                <div className="diff-divider"></div>
                <Image
                  src="/logo_aes.webp"
                  alt="Alliance des États du Sahel"
                  width={160}
                  height={80}
                  style={{ height: '80px', width: 'auto', objectFit: 'contain', opacity: 0.85 }}
                />
              </div>
            </div>
            <div className="diff-list reveal d2">
              <div className="diff-item">
                <div className="diff-check"><span className="ms">science</span></div>
                <div>
                  <div className="diff-item-title">Rigueur Scientifique</div>
                  <p className="diff-item-body">
                    Approches basées sur les évidences empiriques et les modèles macroéconomiques avancés
                    adaptés au contexte sahélien.
                  </p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-check"><span className="ms">gavel</span></div>
                <div>
                  <div className="diff-item-title">Ingénierie Juridique</div>
                  <p className="diff-item-body">
                    Sécurisation des cadres normatifs pour garantir la pérennité institutionnelle de chaque
                    projet et protéger l&apos;intérêt national.
                  </p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-check"><span className="ms">flag</span></div>
                <div>
                  <div className="diff-item-title">Vision Souveraine</div>
                  <p className="diff-item-body">
                    Alignement systématique des stratégies avec les intérêts supérieurs de l&apos;État et
                    les ambitions de développement du continent africain.
                  </p>
                </div>
              </div>
              <div className="diff-item">
                <div className="diff-check"><span className="ms">lock</span></div>
                <div>
                  <div className="diff-item-title">Secret Professionnel</div>
                  <p className="diff-item-body">
                    Protocole de confidentialité de niveau étatique. Vos briefs et stratégies sont traités
                    dans un environnement isolé et souverain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="cta-block">
        <div className="wrap">
          <div className="cta-inner reveal">
            <h2 className="cta-h">Prêt à engager notre expertise&nbsp;?</h2>
            <p className="cta-sub">
              Décrivez votre projet et notre équipe vous contacte sous 24 heures ouvrables pour un premier
              diagnostic.
            </p>
            <div className="cta-actions">
              <Link href="/consultation" className="btn btn-lg btn-white">
                Initier une consultation
              </Link>
              <Link href="/expertise" className="btn btn-lg btn-white-outline">
                Nos domaines d&apos;expertise
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
