'use client';

import { useRouter } from 'next/navigation';

export default function HomeContactForm() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/consultation');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="fg">
          <label className="flabel" htmlFor="cf-prenom">Prénom</label>
          <input id="cf-prenom" className="finput" type="text" name="prenom" placeholder="Votre prénom" />
        </div>
        <div className="fg">
          <label className="flabel" htmlFor="cf-nom">Nom</label>
          <input id="cf-nom" className="finput" type="text" name="nom" placeholder="Votre nom" />
        </div>
      </div>
      <div className="fg">
        <label className="flabel" htmlFor="cf-email">Adresse e-mail</label>
        <input id="cf-email" className="finput" type="email" name="email" placeholder="votre@email.com" />
      </div>
      <div className="fg">
        <label className="flabel" htmlFor="cf-organisation">Organisation / Institution</label>
        <input id="cf-organisation" className="finput" type="text" name="organisation" placeholder="Nom de votre organisation" />
      </div>
      <div className="fg">
        <label className="flabel" htmlFor="cf-secteur">Secteur d&apos;intérêt</label>
        <select id="cf-secteur" className="finput" name="secteur">
          <option value="">Sélectionner un secteur</option>
          <option value="mines">Mines &amp; Ressources naturelles</option>
          <option value="energie">Énergie &amp; Autonomie</option>
          <option value="environnement">Environnement &amp; RSE</option>
          <option value="juridique">Cadre Normatif &amp; Juridique</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div className="fg">
        <label className="flabel" htmlFor="cf-message">Décrivez votre projet</label>
        <textarea id="cf-message" className="finput" name="message" placeholder="Décrivez brièvement votre projet ou vos besoins stratégiques..." />
      </div>
      <button type="submit" className="fsubmit">
        Envoyer la demande <span className="ms" style={{ fontSize: '18px', verticalAlign: 'middle' }}>send</span>
      </button>
    </form>
  );
}
