import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, organisation, email, telephone, secteur, projet } = body;

    if (!nom || !organisation || !email || !telephone || !projet) {
      return NextResponse.json({ error: 'Champs obligatoires manquants' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: (process.env.SMTP_PORT || '465') !== '587',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const cabinetHtml = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #F8F9FA; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,.08); }
  .header { background: #1A2B4B; padding: 32px; text-align: center; }
  .header h1 { color: #009A44; font-size: 22px; margin: 0; letter-spacing: -.02em; }
  .header p { color: rgba(255,255,255,.5); font-size: 13px; margin: 6px 0 0; }
  .content { padding: 32px; }
  .field { margin-bottom: 18px; }
  .field label { display: block; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em; color: #8B8FA8; margin-bottom: 4px; }
  .field p { font-size: 15px; color: #191C1D; margin: 0; padding: 10px 14px; background: #F8F9FA; border-radius: 4px; border-left: 3px solid #009A44; }
  .project-block { background: #EFF1F5; border-radius: 8px; padding: 20px; margin-top: 8px; }
  .project-block p { font-size: 15px; color: #44474E; line-height: 1.7; margin: 0; }
  .footer { padding: 20px 32px; border-top: 1px solid #DDE1EC; font-size: 12px; color: #8B8FA8; text-align: center; }
</style></head>
<body>
<div class="container">
  <div class="header">
    <h1>CASED — Nouvelle Demande de Consultation</h1>
    <p>Reçue le ${new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
  </div>
  <div class="content">
    <div class="field"><label>Nom Complet</label><p>${nom}</p></div>
    <div class="field"><label>Organisation / Ministère</label><p>${organisation}</p></div>
    <div class="field"><label>Email Professionnel</label><p><a href="mailto:${email}" style="color:#009A44">${email}</a></p></div>
    <div class="field"><label>Téléphone</label><p>${telephone}</p></div>
    <div class="field"><label>Secteur d'Intervention</label><p>${secteur || 'Non précisé'}</p></div>
    <div class="field">
      <label>Description du Projet</label>
      <div class="project-block"><p>${projet.replace(/\n/g, '<br>')}</p></div>
    </div>
  </div>
  <div class="footer">CASED — Cabinet Africain de Stratégie &amp; d'Expertise pour le Développement<br>cased-bf.com | contact@cased-bf.com</div>
</div>
</body></html>`;

    const confirmationHtml = `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><style>
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #F8F9FA; margin: 0; padding: 0; }
  .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,.08); }
  .header { background: #1A2B4B; padding: 48px 32px; text-align: center; }
  .check { width: 64px; height: 64px; border-radius: 50%; background: rgba(0,154,68,.2); border: 2px solid rgba(0,154,68,.4); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; }
  .header h1 { color: #fff; font-size: 24px; margin: 0 0 8px; letter-spacing: -.02em; }
  .header p { color: rgba(255,255,255,.5); font-size: 14px; margin: 0; }
  .content { padding: 36px 32px; }
  .greeting { font-size: 16px; color: #191C1D; line-height: 1.7; margin-bottom: 24px; }
  .info-box { background: #EFF1F5; border-radius: 8px; padding: 24px; margin-bottom: 24px; }
  .info-box h3 { font-size: 14px; font-weight: 700; color: #1A2B4B; margin: 0 0 12px; }
  .info-item { display: flex; gap: 8px; font-size: 14px; color: #44474E; margin-bottom: 8px; }
  .info-item strong { color: #1A2B4B; min-width: 120px; }
  .steps { display: flex; flex-direction: column; gap: 12px; margin-bottom: 28px; }
  .step { display: flex; align-items: flex-start; gap: 14px; padding: 16px; border: 1px solid #DDE1EC; border-radius: 8px; }
  .step-num { width: 32px; height: 32px; border-radius: 50%; background: #009A44; color: #fff; font-weight: 800; font-size: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
  .step-text h4 { font-size: 14px; font-weight: 700; color: #1A2B4B; margin: 0 0 4px; }
  .step-text p { font-size: 13px; color: #44474E; margin: 0; }
  .contact-box { background: #1A2B4B; border-radius: 8px; padding: 24px; color: #fff; text-align: center; }
  .contact-box h3 { font-size: 15px; font-weight: 700; margin: 0 0 12px; }
  .contact-box p { font-size: 13px; color: rgba(255,255,255,.55); margin: 0 0 8px; }
  .contact-box a { color: #009A44; text-decoration: none; }
  .footer { padding: 20px 32px; border-top: 1px solid #DDE1EC; font-size: 12px; color: #8B8FA8; text-align: center; }
</style></head>
<body>
<div class="container">
  <div class="header">
    <div class="check">✓</div>
    <h1>Demande bien reçue</h1>
    <p>Votre consultation stratégique a été transmise à notre équipe</p>
  </div>
  <div class="content">
    <p class="greeting">Bonjour <strong>${nom}</strong>,<br><br>Nous confirmons la bonne réception de votre demande de consultation stratégique. Notre équipe a été informée et prend en charge votre dossier.</p>
    <div class="info-box">
      <h3>Récapitulatif de votre demande</h3>
      <div class="info-item"><strong>Organisation :</strong> ${organisation}</div>
      <div class="info-item"><strong>Secteur :</strong> ${secteur || 'Non précisé'}</div>
      <div class="info-item"><strong>Référence :</strong> CASED-${Date.now().toString(36).toUpperCase()}</div>
    </div>
    <div class="steps">
      <div class="step"><div class="step-num">1</div><div class="step-text"><h4>Analyse de votre brief</h4><p>Notre équipe examine votre demande et identifie les expertises mobilisables.</p></div></div>
      <div class="step"><div class="step-num">2</div><div class="step-text"><h4>Réponse personnalisée sous 24h</h4><p>Un expert CASED vous contactera à l'adresse <strong>${email}</strong> dans les 24 heures ouvrables.</p></div></div>
      <div class="step"><div class="step-num">3</div><div class="step-text"><h4>Engagement stratégique</h4><p>Après validation mutuelle, nous définissons ensemble le cadre de la mission.</p></div></div>
    </div>
    <div class="contact-box">
      <h3>Besoin d'une réponse urgente ?</h3>
      <p>Contactez-nous directement :</p>
      <p><a href="mailto:contact@cased-bf.com">contact@cased-bf.com</a></p>
      <p><a href="tel:+22625431144">+226 25 43 11 44</a> | <a href="tel:+22670205057">+226 70 20 50 57</a></p>
    </div>
  </div>
  <div class="footer">© 2026 CASED — Cabinet Africain de Stratégie &amp; d'Expertise pour le Développement<br>BP 30162 Ouaga Pissy, Ouagadougou, Burkina Faso</div>
</div>
</body></html>`;

    const fromAddress = process.env.SMTP_FROM || `CASED <${process.env.SMTP_USER}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: 'contact@cased-bf.com',
      replyTo: email,
      subject: `[CASED] Nouvelle consultation — ${secteur || 'Non précisé'} — ${nom}`,
      html: cabinetHtml,
    });

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: 'CASED — Confirmation de votre demande de consultation stratégique',
      html: confirmationHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[CASED] Erreur envoi email:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi du message' }, { status: 500 });
  }
}
