import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="fb-name">CASED</div>
            <p className="fb-desc">Cabinet Africain de Stratégie &amp; d&apos;Expertise pour le Développement. Laboratoire d&apos;idées souveraines et architecte des transformations majeures du continent.</p>
            <div className="fb-socials">
              <a className="fb-soc" href="#" aria-label="LinkedIn">in</a>
              <a className="fb-soc" href="#" aria-label="Twitter / X">𝕏</a>
              <a className="fb-soc" href="https://cased-bf.com" target="_blank" rel="noopener noreferrer" aria-label="Site web">
                <span className="ms" style={{ fontSize: 16, color: 'inherit' }}>public</span>
              </a>
            </div>
          </div>
          <div>
            <div className="fc-title">Expertise</div>
            <div className="flinks">
              <Link className="flink" href="/expertise#mines">Mines &amp; Industrie</Link>
              <Link className="flink" href="/expertise#energies">Énergies AES</Link>
              <Link className="flink" href="/expertise#environnement">Environnement</Link>
              <Link className="flink" href="/expertise#validite">Cadre Normatif</Link>
            </div>
          </div>
          <div>
            <div className="fc-title">Cabinet</div>
            <div className="flinks">
              <Link className="flink" href="/a-propos">À Propos</Link>
              <Link className="flink" href="/approche">Notre Approche</Link>
              <Link className="flink" href="/#aes">Confédération AES</Link>
              <Link className="flink" href="/consultation">Contact</Link>
            </div>
          </div>
          <div>
            <div className="fc-title">Légal</div>
            <div className="flinks">
              <Link className="flink" href="/mentions-legales">Mentions Légales</Link>
              <Link className="flink" href="/mentions-legales#confidentialite">Confidentialité</Link>
              <Link className="flink" href="#">Registre RCCM/IFU</Link>
            </div>
            <div style={{ marginTop: 24, fontSize: 11, color: 'rgba(255,255,255,.25)', lineHeight: 2 }}>
              <div>RCCM : BJ-COO-01-2024-B13-00042</div>
              <div>IFU : 3202415487901</div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="fasopot-credit">
            Design &amp; Digital by <a href="tel:+212777346787">FASOPOT DIGITAL</a> — +212 777 346 787
          </div>
          <p className="fc">© 2026 CASED — Cabinet Africain de Stratégie &amp; d&apos;Expertise pour le Développement. Tous droits réservés.</p>
          <div className="flegal">
            <span className="flbadge">Ouagadougou, Burkina Faso</span>
            <span className="flbadge">AES — Espace Sahel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
