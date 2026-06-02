'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MentionsLegalesPage() {
  const [activeSection, setActiveSection] = useState('editeur');

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.ml-section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -60% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const tocLinks = [
    { href: 'editeur', label: 'Éditeur du site' },
    { href: 'hebergement', label: 'Hébergement' },
    { href: 'propriete', label: 'Propriété intellectuelle' },
    { href: 'responsabilite', label: 'Responsabilité' },
    { href: 'donnees', label: 'Données personnelles' },
    { href: 'cookies', label: 'Cookies' },
    { href: 'cgv', label: 'Conditions Générales' },
    { href: 'confidentialite', label: 'Confidentialité' },
    { href: 'contact-legal', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        .ml-page-wrap{padding-top:76px;display:grid;grid-template-columns:240px 1fr;gap:48px;max-width:1100px;margin:0 auto;padding-left:clamp(20px,5vw,80px);padding-right:clamp(20px,5vw,80px);padding-bottom:80px}
        .ml-toc{padding-top:48px;position:sticky;top:96px;align-self:start}
        .ml-toc-title{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--dim);margin-bottom:16px}
        .ml-toc-links{display:flex;flex-direction:column;gap:4px}
        .ml-toc-link{display:block;padding:8px 12px;font-size:13px;color:var(--muted);border-radius:var(--r-md);transition:all .2s;font-weight:500;border-left:2px solid transparent;text-decoration:none}
        .ml-toc-link:hover{color:var(--navy);background:var(--surface2);border-left-color:var(--accent)}
        .ml-toc-link.active{color:var(--accent);background:rgba(0,154,68,.06);border-left-color:var(--accent);font-weight:600}
        .ml-content{padding-top:48px}
        .ml-content-header{margin-bottom:48px;padding-bottom:32px;border-bottom:1px solid var(--border)}
        .ml-ch-badge{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:100px;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:rgba(0,154,68,.1);color:var(--accent);margin-bottom:16px}
        .ml-ch-h1{font-size:clamp(28px,3.5vw,40px);font-weight:800;color:var(--navy);letter-spacing:-.035em;line-height:1.15;margin-bottom:12px}
        .ml-ch-meta{font-size:14px;color:var(--dim);display:flex;align-items:center;gap:16px;flex-wrap:wrap}
        .ml-section{margin-bottom:52px;scroll-margin-top:100px}
        .ml-section h2{font-size:22px;font-weight:700;color:var(--navy);letter-spacing:-.02em;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid var(--accent);display:inline-block}
        .ml-section h3{font-size:17px;font-weight:700;color:var(--navy);margin:24px 0 10px}
        .ml-section p{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:14px}
        .ml-section ul{margin:0 0 14px 20px;display:flex;flex-direction:column;gap:8px}
        .ml-section li{font-size:15px;color:var(--muted);line-height:1.65;position:relative}
        .ml-section li::before{content:'—';position:absolute;left:-18px;color:var(--accent);font-weight:700}
        .ml-section strong{color:var(--navy);font-weight:600}
        .ml-section a{color:var(--accent)}
        .info-box{background:var(--surface2);border:1px solid var(--border);border-radius:var(--r-lg);padding:24px;margin:20px 0}
        .info-box-accent{border-left:3px solid var(--accent)}
        .info-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:20px 0}
        .info-item{background:var(--white);border:1px solid var(--border);border-radius:var(--r-lg);padding:16px}
        .info-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--dim);margin-bottom:6px}
        .info-value{font-size:15px;font-weight:600;color:var(--navy)}
        @media(max-width:768px){.ml-page-wrap{grid-template-columns:1fr;padding-top:76px}.ml-toc{display:none}.info-grid{grid-template-columns:1fr}}
      `}</style>

      <div className="ml-page-wrap">
        <aside className="ml-toc">
          <div className="ml-toc-title">Sur cette page</div>
          <div className="ml-toc-links">
            {tocLinks.map(l => (
              <a key={l.href} className={`ml-toc-link${activeSection === l.href ? ' active' : ''}`} href={`#${l.href}`}>{l.label}</a>
            ))}
          </div>
        </aside>

        <main className="ml-content">
          <div className="ml-content-header">
            <div className="ml-ch-badge"><span className="ms" style={{ fontSize: 13 }}>gavel</span>Documents Légaux</div>
            <h1 className="ml-ch-h1">Mentions Légales, CGV &amp; Politique de Confidentialité</h1>
            <div className="ml-ch-meta">
              <span><span className="ms" style={{ fontSize: 16 }}>calendar_month</span> Dernière mise à jour : Juin 2026</span>
              <span><span className="ms" style={{ fontSize: 16 }}>location_on</span> Ouagadougou, Burkina Faso</span>
            </div>
          </div>

          <div className="ml-section" id="editeur">
            <h2>1. Éditeur du Site</h2>
            <p>Le site <strong>cased-bf.com</strong> est édité par le Cabinet Africain de Stratégie &amp; d&apos;Expertise pour le Développement (CASED), cabinet de conseil stratégique enregistré au Burkina Faso.</p>
            <div className="info-grid">
              <div className="info-item"><div className="info-label">Dénomination</div><div className="info-value">CASED</div></div>
              <div className="info-item"><div className="info-label">Forme juridique</div><div className="info-value">Cabinet de Conseil</div></div>
              <div className="info-item"><div className="info-label">RCCM</div><div className="info-value">BJ-COO-01-2024-B13-00042</div></div>
              <div className="info-item"><div className="info-label">IFU</div><div className="info-value">3202415487901</div></div>
              <div className="info-item"><div className="info-label">Siège social</div><div className="info-value">BP 30162 Ouaga Pissy, Ouagadougou</div></div>
              <div className="info-item"><div className="info-label">Pays</div><div className="info-value">Burkina Faso</div></div>
              <div className="info-item"><div className="info-label">Email</div><div className="info-value"><a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a></div></div>
              <div className="info-item"><div className="info-label">Téléphones</div><div className="info-value">+226 25 43 11 44 | +226 70 20 50 57</div></div>
              <div className="info-item"><div className="info-label">Site web</div><div className="info-value"><a href="https://cased-bf.com">cased-bf.com</a></div></div>
              <div className="info-item"><div className="info-label">Année de fondation</div><div className="info-value">2026</div></div>
            </div>
            <p><strong>Directeur de la publication :</strong> La Direction Générale du Cabinet CASED.</p>
            <p><strong>Conception &amp; développement numérique :</strong> <a href="tel:+212777346787">FASOPOT DIGITAL</a> — +212 777 346 787</p>
          </div>

          <div className="ml-section" id="hebergement">
            <h2>2. Hébergement</h2>
            <p>Le site cased-bf.com est hébergé par un prestataire d&apos;hébergement web professionnel garantissant la disponibilité, la sécurité et l&apos;intégrité des données. Les coordonnées de l&apos;hébergeur seront communiquées sur demande adressée à <a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a>.</p>
          </div>

          <div className="ml-section" id="propriete">
            <h2>3. Propriété Intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site cased-bf.com — textes, analyses, méthodologies, graphismes, logos, icônes, images, sons, vidéos, logiciels et bases de données — est la propriété exclusive du Cabinet CASED ou de ses partenaires.</p>
            <p>Toute reproduction, représentation, modification, publication, adaptation ou exploitation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est <strong>interdite sans autorisation écrite préalable</strong> du Cabinet CASED.</p>
            <div className="info-box info-box-accent">
              <strong>Demandes de reproduction :</strong> Toute demande d&apos;autorisation de reproduction doit être adressée à <a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a> en précisant l&apos;usage envisagé, le support et le tirage prévu.
            </div>
          </div>

          <div className="ml-section" id="responsabilite">
            <h2>4. Limitation de Responsabilité</h2>
            <p>Le Cabinet CASED s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, CASED ne peut garantir l&apos;exhaustivité, l&apos;exactitude ou l&apos;actualité des informations publiées.</p>
            <p>CASED ne saurait être tenu responsable :</p>
            <ul>
              <li>Des erreurs ou omissions dans les informations publiées</li>
              <li>Des dommages directs ou indirects résultant de l&apos;utilisation du site</li>
              <li>Des interruptions ou indisponibilités du site</li>
              <li>Du contenu des sites externes vers lesquels le site renvoie</li>
            </ul>
            <p>Les analyses stratégiques et recommandations publiées sur ce site ont une valeur informative générale et ne constituent pas une prestation de conseil individualisée.</p>
          </div>

          <div className="ml-section" id="donnees">
            <h2>5. Protection des Données Personnelles</h2>
            <p>Le Cabinet CASED s&apos;engage à protéger la vie privée des utilisateurs de son site et traite les données personnelles dans le strict respect de la législation burkinabè applicable et des standards internationaux de protection des données.</p>
            <h3>5.1 Données collectées</h3>
            <p>Lors de l&apos;utilisation du formulaire de contact ou de consultation, les données suivantes sont collectées :</p>
            <ul>
              <li>Nom et prénom</li>
              <li>Email professionnel</li>
              <li>Numéro de téléphone</li>
              <li>Organisation / Ministère</li>
              <li>Description du projet ou de la mission</li>
            </ul>
            <h3>5.2 Finalités du traitement</h3>
            <p>Ces données sont collectées exclusivement aux fins suivantes :</p>
            <ul>
              <li>Répondre à votre demande de consultation stratégique</li>
              <li>Vous adresser des informations relatives aux services du Cabinet</li>
              <li>Améliorer la qualité de nos services</li>
            </ul>
            <h3>5.3 Conservation des données</h3>
            <p>Les données sont conservées pour la durée nécessaire à la gestion de la relation commerciale et au maximum <strong>36 mois</strong> après le dernier contact. Les données relatives aux contrats sont conservées pendant la durée légale applicable.</p>
            <h3>5.4 Vos droits</h3>
            <p>Conformément à la réglementation applicable, vous disposez des droits suivants sur vos données personnelles :</p>
            <ul>
              <li><strong>Droit d&apos;accès</strong> — obtenir communication des données vous concernant</li>
              <li><strong>Droit de rectification</strong> — corriger les données inexactes</li>
              <li><strong>Droit d&apos;effacement</strong> — demander la suppression de vos données</li>
              <li><strong>Droit d&apos;opposition</strong> — vous opposer à certains traitements</li>
              <li><strong>Droit à la portabilité</strong> — récupérer vos données dans un format structuré</li>
            </ul>
            <p>Pour exercer ces droits : <a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a></p>
          </div>

          <div className="ml-section" id="cookies">
            <h2>6. Cookies</h2>
            <p>Le site cased-bf.com peut utiliser des cookies techniques strictement nécessaires au fonctionnement du site. Ces cookies ne collectent aucune donnée personnelle et ne sont pas utilisés à des fins de traçage ou de publicité ciblée.</p>
            <p>Vous pouvez configurer votre navigateur pour refuser les cookies. Toutefois, certaines fonctionnalités du site pourraient être affectées.</p>
          </div>

          <div className="ml-section" id="cgv">
            <h2>7. Conditions Générales de Vente (CGV)</h2>
            <h3>7.1 Champ d&apos;application</h3>
            <p>Les présentes Conditions Générales de Vente s&apos;appliquent à toutes les prestations de conseil, d&apos;expertise et d&apos;ingénierie stratégique fournies par le Cabinet CASED à ses clients institutionnels et privés.</p>
            <h3>7.2 Devis et commandes</h3>
            <p>Toute prestation fait l&apos;objet d&apos;un devis détaillé préalable. L&apos;accord sur le devis, formalisé par la signature d&apos;un contrat de prestation, constitue la commande ferme. Aucune prestation n&apos;est engagée sans contrat signé.</p>
            <h3>7.3 Tarification</h3>
            <p>Les tarifs des prestations CASED sont établis sur devis, en fonction de la nature, de la durée et de la complexité de la mission. Les prix sont exprimés en Francs CFA (FCFA) hors taxes applicables.</p>
            <h3>7.4 Modalités de paiement</h3>
            <ul>
              <li>30% d&apos;acompte à la signature du contrat</li>
              <li>40% à mi-parcours de la mission</li>
              <li>30% à la livraison du rapport final</li>
            </ul>
            <p>Tout retard de paiement entraîne des pénalités de retard au taux légal en vigueur au Burkina Faso.</p>
            <h3>7.5 Confidentialité des missions</h3>
            <p>Le Cabinet CASED s&apos;engage à maintenir une confidentialité stricte sur toutes les informations communiquées dans le cadre des missions. Cette obligation de confidentialité est réciproque et d&apos;une durée de <strong>5 ans</strong> après la fin de la mission.</p>
            <h3>7.6 Propriété des livrables</h3>
            <p>Les livrables produits dans le cadre d&apos;une mission (rapports, analyses, recommandations) sont cédés au client à la réception du paiement intégral. Le Cabinet CASED se réserve le droit de mentionner l&apos;existence de la mission dans ses références, sans divulguer les informations confidentielles.</p>
            <h3>7.7 Résiliation</h3>
            <p>En cas de résiliation du contrat par le client avant terme, les prestations réalisées sont facturées au prorata. Des frais de résiliation correspondant à 20% du montant restant dû sont applicables.</p>
            <h3>7.8 Droit applicable et juridiction</h3>
            <p>Les présentes CGV sont soumises au droit burkinabè. Tout litige relatif à leur interprétation ou exécution sera soumis aux tribunaux compétents de Ouagadougou, Burkina Faso.</p>
          </div>

          <div className="ml-section" id="confidentialite">
            <h2>8. Charte de Confidentialité CASED</h2>
            <div className="info-box info-box-accent">
              <strong>Protocole de Souveraineté Numérique :</strong> Le Cabinet CASED applique un protocole de confidentialité de niveau étatique. Toutes les communications et données clients sont traitées dans un environnement sécurisé et isolé.
            </div>
            <p>La charte de confidentialité CASED repose sur trois principes fondamentaux :</p>
            <ul>
              <li><strong>Anonymisation totale</strong> — Les données sensibles sont chiffrées dès leur réception</li>
              <li><strong>Cloisonnement strict</strong> — Chaque dossier client est traité dans un environnement informatique isolé</li>
              <li><strong>Traçabilité interne</strong> — Tout accès aux données client est enregistré et audité</li>
            </ul>
            <p>CASED s&apos;engage à ne jamais transmettre, vendre ou échanger les données clients avec des tiers, sauf obligation légale expresse.</p>
          </div>

          <div className="ml-section" id="contact-legal">
            <h2>9. Contact Légal</h2>
            <p>Pour toute question relative aux présentes mentions légales, à la protection de vos données ou à nos conditions générales :</p>
            <div className="info-box">
              <p><strong>Cabinet CASED — Service Juridique</strong><br />BP 30162 Ouaga Pissy, Ouagadougou, Burkina Faso<br />Email : <a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a><br />Téléphone : +226 25 43 11 44<br />Site : <a href="https://cased-bf.com">cased-bf.com</a></p>
            </div>
            <p style={{ marginTop: 24, fontSize: 14, color: 'var(--dim)' }}>Conception &amp; développement : <a href="tel:+212777346787">FASOPOT DIGITAL</a> — +212 777 346 787</p>
          </div>
        </main>
      </div>

    </>
  );
}
