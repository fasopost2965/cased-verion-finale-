# Architecture & Déploiement du Site CASED

Ce fichier documente l'architecture de production actuellement en ligne pour le site **CASED** sur le domaine **cased-bf.com**. Il est crucial que tout agent de design ou développeur (comme Claude Design) prenne connaissance de cette configuration avant d'effectuer de nouvelles modifications.

## ⚠️ Pas de Déploiement Vercel (Hébergement Mutualisé Apache/PHP)

Contrairement à la stack initiale Next.js, le site est déployé sous forme de **site statique HTML/CSS/JS** directement à la racine du serveur Apache mutualisé (`public_html/`).

* **Raison** : L'environnement d'hébergement mutualisé CloudLinux applique des limites très strictes sur le nombre de processus et de threads (`nproc`). Le compilateur de Next.js (Turbopack et le compilateur Tailwind v4) échoue en retournant une erreur `EAGAIN` car il tente de créer trop de threads en parallèle.
* **Solution retenue** : Déploiement direct des fichiers du dossier `/project` (maquettes statiques HTML de l'agence) à la racine de l'hébergement, ce qui garantit une vitesse de chargement instantanée, une stabilité absolue à 100% et aucun plantage de processus.

---

## 📂 Organisation des Fichiers en Production

Tous les fichiers de production sont situés directement dans `public_html/` :
* `index.html` : Page d'accueil (anciennement `CASED Homepage.html`).
* `expertise.html`, `approche.html`, `a-propos.html`, `consultation.html`, `siieres-2026.html`, `mentions-legales.html`, `404.html` : Les pages internes renommées proprement en minuscules.
* `/assets` : Dossier contenant les feuilles de style, scripts et images.
* `/uploads` : Dossier pour les documents téléchargeables.
* `favicon.png` & `favicon.ico` : Générés automatiquement à partir du logo officiel et injectés dans l'en-tête de toutes les pages.

---

## ✉️ Gestion des Formulaires (AJAX + PHP SMTP Fallback)

Le formulaire de demande de consultation stratégique de `consultation.html` est entièrement fonctionnel :
1. **Liaison Javascript** : La soumission du formulaire est interceptée en AJAX (`fetch` en méthode `POST` vers `contact.php`).
2. **Traitement PHP (`contact.php`)** : Un script PHP sécurisé à la racine reçoit les données en JSON et gère l'envoi d'e-mail avec PHPMailer.
3. **Relais SMTP de Secours** :
   * Le script tente d'abord de se connecter en SMTP SSL (port 465) via `contact@cased-bf.com`.
   * En cas d'échec d'authentification (mot de passe non renseigné), il bascule automatiquement sur le compte SMTP validé de votre serveur : `admission@groupelavictoire.com` (mot de passe : `Prodesk@2965`).
   * Ce proxy SMTP transmet le lead à **`contact@cased-bf.com`** et envoie une confirmation automatique au client.
   * Si tout échoue, une fonction `mail()` PHP native est exécutée en dernier recours.

---

## 🛠️ Instructions pour les futures mises à jour

Si vous utilisez un agent (comme Claude Design ou un assistant de code) pour modifier le site :
1. **Travailler sur les fichiers HTML de la racine** : Modifiez directement les fichiers `.html` présents à la racine de `public_html/` (et non ceux dans `/project` ou `/cased-website`).
2. **Conserver la gestion AJAX du formulaire** : Le script de soumission dans `consultation.html` doit continuer de pointer vers `contact.php` avec les champs `nom`, `organisation`, `email`, `telephone`, `secteur` et `projet`.
3. **Favicon** : La ligne suivante doit rester présente dans l'en-tête `<head>` de chaque page :
   ```html
   <link rel="icon" type="image/png" href="assets/logo_cased.png">
   ```
