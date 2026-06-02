import type { Metadata } from 'next';
import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Expertise Stratégique | CASED',
  description: 'Domaines d\'expertise stratégique CASED — Mines & Souveraineté, Environnement RSE, Énergies renouvelables, Art de la Validité.',
};

export default function ExpertisePage() {
  return (
    <>
      <ScrollReveal />
      <style>{`
        .page-hero{padding-top:76px;background:var(--surface);border-bottom:1px solid var(--border)}
        .page-hero-inner{padding-top:72px;padding-bottom:64px}
        .legal-row{display:flex;gap:10px;margin-bottom:24px;flex-wrap:wrap}
        .legal-tag{display:inline-flex;align-items:center;gap:6px;padding:5px 12px;background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);font-size:10px;font-weight:700;color:var(--dim);letter-spacing:.08em;text-transform:uppercase}
        .page-h1{font-size:clamp(32px,4.2vw,52px);font-weight:800;color:var(--navy);letter-spacing:-.035em;line-height:1.1;margin-bottom:20px}
        .page-intro{font-size:18px;line-height:1.72;color:var(--muted);max-width:760px}
        .page-intro strong{color:var(--navy);font-weight:600}
        .pillars{background:var(--white)}
        .pillar{padding:72px 0;border-bottom:1px solid var(--border)}
        .pillar:last-child{border-bottom:none}
        .pillar-inner{display:grid;grid-template-columns:auto 1fr auto;gap:48px;align-items:start}
        .pillar-icon-col{padding-top:6px}
        .pillar-icon{width:56px;height:56px;border-radius:var(--r-md);display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .pillar-icon .ms{font-size:28px}
        .pi-accent{background:rgba(0,154,68,.12);color:var(--accent)}
        .pi-green{background:rgba(45,90,39,.1);color:var(--green)}
        .pi-navy{background:rgba(26,43,75,.08);color:var(--navy)}
        .pillar-label{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--accent);margin-bottom:10px}
        .pillar-title{font-size:clamp(22px,2.5vw,28px);font-weight:700;color:var(--navy);letter-spacing:-.025em;margin-bottom:14px;line-height:1.25}
        .pillar-desc{font-size:16px;line-height:1.72;color:var(--muted);max-width:600px;margin-bottom:28px}
        .pillar-checks{display:grid;grid-template-columns:1fr 1fr;gap:10px 24px;margin-bottom:32px}
        .pcheck{display:flex;align-items:center;gap:8px;font-size:14px;color:var(--muted)}
        .pcheck .ms{font-size:17px;color:var(--green)}
        .pillar-media{width:280px;flex-shrink:0}
        .pillar-img{width:100%;height:200px;border-radius:var(--r-lg);background:linear-gradient(135deg,var(--surface2),var(--border));position:relative;overflow:hidden;border:1px solid var(--border)}
        .pillar-img::before{content:'';position:absolute;inset:0;background:repeating-linear-gradient(45deg,rgba(0,0,0,.025) 0,rgba(0,0,0,.025) 1px,transparent 1px,transparent 14px)}
        .pillar-img::after{content:attr(data-label);position:absolute;bottom:14px;left:0;right:0;text-align:center;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--dim)}
        .pillar-img-badge{position:absolute;top:14px;left:14px;padding:5px 10px;border-radius:var(--r);font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
        .pib-accent{background:var(--accent);color:var(--white)}
        .pib-green{background:var(--green);color:var(--white)}
        .pib-navy{background:var(--navy);color:var(--white)}
        .cta-block{background:var(--navy-deep);padding:var(--sy) 0;text-align:center;position:relative;overflow:hidden}
        .cta-block::before{content:'';position:absolute;inset:0;background-image:radial-gradient(rgba(0,154,68,.18) 1px,transparent 1px);background-size:32px 32px;pointer-events:none}
        .cta-inner{position:relative;z-index:1}
        .cta-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:rgba(45,90,39,.2);color:#7DC67A;border:1px solid rgba(45,90,39,.3);margin-bottom:24px}
        .cta-h{font-size:clamp(28px,4vw,48px);font-weight:800;color:var(--white);letter-spacing:-.03em;line-height:1.1;margin-bottom:20px}
        .cta-h .gold{color:var(--accent)}
        .cta-sub{font-size:17px;color:rgba(255,255,255,.5);max-width:640px;margin:0 auto 40px;line-height:1.7}
        .cta-sub .gold{color:var(--accent);font-style:italic}
        .cta-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
        @media(max-width:1024px){.pillar-inner{grid-template-columns:auto 1fr;gap:32px}.pillar-media{display:none}}
        @media(max-width:768px){.pillar-inner{grid-template-columns:1fr}.pillar-icon-col{display:flex;align-items:center;gap:16px}.pillar-checks{grid-template-columns:1fr}}
      `}</style>

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap page-hero-inner">
          <div className="legal-row reveal">
            <span className="legal-tag"><span className="ms" style={{ fontSize: 12 }}>verified</span> RCCM : BJ-COO-01-2024-B13-00042</span>
            <span className="legal-tag">IFU : 3202415487901</span>
          </div>
          <h1 className="page-h1 reveal d1">Domaines d&apos;Expertise<br />Stratégique</h1>
          <p className="page-intro reveal d2">
            L&apos;Art de la Validité au service du renouveau institutionnel. CASED déploie une ingénierie multisectorielle pour transformer les ressources souveraines en piliers du développement durable, en parfaite synergie avec le <strong>PND RELANCE</strong> et les ambitions de l&apos;Espace AES.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <main className="pillars">

        {/* 01 — Mines */}
        <div className="pillar" id="mines">
          <div className="wrap">
            <div className="pillar-inner">
              <div className="pillar-icon-col">
                <div className="pillar-icon pi-accent"><span className="ms">precision_manufacturing</span></div>
              </div>
              <div className="pillar-body reveal">
                <div className="pillar-label">Pilier 01</div>
                <h2 className="pillar-title">Mines &amp; Souveraineté Industrielle</h2>
                <p className="pillar-desc">Nous accompagnons les États et les acteurs industriels dans la sécurisation de la chaîne de valeur minière. Notre approche garantit que l&apos;extraction profite directement aux économies locales par une structuration juridique et technique rigoureuse, alignée sur les impératifs du PND RELANCE.</p>
                <div className="pillar-checks">
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Transformation locale intégrée</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Audits de contrats miniers</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Stratégie de Contenu Local</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Optimisation de la redevance</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Chaînes de valeur locales</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Négociation de concessions</div>
                </div>
                <Link className="btn btn-primary" href="/consultation">
                  Demander une expertise
                  <span className="ms" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div className="pillar-media reveal d1">
                <div className="pillar-img" data-label="Mines &amp; Industrie">
                  <div className="pillar-img-badge pib-accent">Souveraineté Minière</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Environnement */}
        <div className="pillar" id="environnement" style={{ background: 'var(--surface)' }}>
          <div className="wrap">
            <div className="pillar-inner">
              <div className="pillar-icon-col">
                <div className="pillar-icon pi-green"><span className="ms">eco</span></div>
              </div>
              <div className="pillar-body reveal">
                <div className="pillar-label">Pilier 02</div>
                <h2 className="pillar-title">Environnement &amp; RSE Endogène</h2>
                <p className="pillar-desc">Au-delà de la conformité, nous concevons la responsabilité sociétale comme un levier de légitimité territoriale. Nos experts intègrent les savoirs endogènes aux standards internationaux pour une résilience durable et une souveraineté écologique ancrée dans les réalités sahéliennes.</p>
                <div className="pillar-checks">
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Études d&apos;Impact (EIES)</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Restauration des sols dégradés</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>RSE focalisée communauté</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Gestion de l&apos;eau &amp; biodiversité</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Normes AES &amp; Audit environnemental</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Stratégies de contenu local environnemental</div>
                </div>
                <Link className="btn btn-primary" href="/consultation">
                  Demander une expertise
                  <span className="ms" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div className="pillar-media reveal d1">
                <div className="pillar-img" data-label="RSE &amp; Environnement">
                  <div className="pillar-img-badge pib-green">Développement Durable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 03 — Énergies */}
        <div className="pillar" id="energies">
          <div className="wrap">
            <div className="pillar-inner">
              <div className="pillar-icon-col">
                <div className="pillar-icon pi-accent"><span className="ms">bolt</span></div>
              </div>
              <div className="pillar-body reveal">
                <div className="pillar-label">Pilier 03</div>
                <h2 className="pillar-title">Énergies Renouvelables &amp; Autonomie</h2>
                <p className="pillar-desc">Le développement ne peut se faire sans une énergie souveraine, propre et accessible. CASED intervient sur toute la chaîne de déploiement des infrastructures énergétiques décentralisées, du diagnostic à la supervision opérationnelle, en parfait alignement avec les objectifs du PND RELANCE.</p>
                <div className="pillar-checks">
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Centrales solaires &amp; Mini-grids</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Efficacité énergétique (Audit)</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Ingénierie de financement</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Stockage &amp; Hydrogène vert</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Optimisation SCADA</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Électrification rurale décentralisée</div>
                </div>
                <Link className="btn btn-primary" href="/consultation">
                  Demander une expertise
                  <span className="ms" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div className="pillar-media reveal d1">
                <div className="pillar-img" data-label="Énergie Souveraine">
                  <div className="pillar-img-badge pib-navy">Transition Énergétique</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — Validité */}
        <div className="pillar" id="validite" style={{ background: 'var(--surface)' }}>
          <div className="wrap">
            <div className="pillar-inner">
              <div className="pillar-icon-col">
                <div className="pillar-icon pi-navy"><span className="ms">gavel</span></div>
              </div>
              <div className="pillar-body reveal">
                <div className="pillar-label">Pilier 04</div>
                <h2 className="pillar-title">L&apos;Art de la Validité</h2>
                <p className="pillar-desc">Notre &ldquo;Signature de Validité&rdquo; est un gage de conformité absolue. Nous analysons les risques juridiques et opérationnels pour sécuriser vos investissements et garantir leur alignement avec les lois nationales, les cadres AES et les standards internationaux d&apos;investissement.</p>
                <div className="pillar-checks">
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Audit de conformité (Compliance)</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Veille réglementaire stratégique</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Évaluation d&apos;impact juridique</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Certification de projets</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Ingénierie contractuelle souveraine</div>
                  <div className="pcheck"><span className="ms ms-fill" style={{ fontSize: 17 }}>check_circle</span>Sécurisation des investissements</div>
                </div>
                <Link className="btn btn-primary" href="/consultation">
                  Demander une expertise
                  <span className="ms" style={{ fontSize: 18 }}>arrow_forward</span>
                </Link>
              </div>
              <div className="pillar-media reveal d1">
                <div className="pillar-img" data-label="Conformité &amp; Droit">
                  <div className="pillar-img-badge pib-navy">Art de la Validité</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* CTA BLOCK */}
      <section className="cta-block">
        <div className="wrap cta-inner reveal">
          <div className="cta-badge">
            <span className="ms" style={{ fontSize: 13 }}>flag</span>
            Souveraineté Institutionnelle
          </div>
          <h2 className="cta-h">Engagé pour la<br /><span className="gold">Relance Nationale</span></h2>
          <p className="cta-sub">
            Chacun de nos domaines d&apos;intervention est calibré pour répondre aux défis urgents du <span className="gold">PND RELANCE</span> et renforcer l&apos;intégration économique au sein de l&apos;AES. Construisons ensemble l&apos;autonomie de demain.
          </p>
          <div className="cta-actions">
            <Link className="btn btn-primary btn-lg" href="/consultation">Devenir Partenaire</Link>
            <Link className="btn btn-ghost btn-lg" href="/">Nos Sentiers</Link>
          </div>
        </div>
      </section>
    </>
  );
}
