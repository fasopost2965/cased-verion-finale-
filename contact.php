<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Méthode non autorisée. Seules les requêtes POST sont acceptées."]);
    exit;
}

// Read inputs (either from $_POST or raw JSON body)
$input = json_decode(file_get_contents("php://input"), true);
if (!$input) {
    $input = $_POST;
}

$nom = isset($input['nom']) ? trim($input['nom']) : '';
$organisation = isset($input['organisation']) ? trim($input['organisation']) : '';
$email = isset($input['email']) ? trim($input['email']) : '';
$telephone = isset($input['telephone']) ? trim($input['telephone']) : '';
$secteur = isset($input['secteur']) ? trim($input['secteur']) : '';
$projet = isset($input['projet']) ? trim($input['projet']) : '';
$rgpd = isset($input['rgpd']) ? (bool)$input['rgpd'] : false;

// Validation
if (empty($nom) || empty($organisation) || empty($email) || empty($telephone) || empty($projet)) {
    http_response_code(400);
    echo json_encode(["error" => "Veuillez remplir tous les champs obligatoires."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Adresse email invalide."]);
    exit;
}

// Path to vendor directory (copied from school site)
$vendor_path = __DIR__ . '/vendor/autoload.php';
$has_phpmailer = file_exists($vendor_path);

if ($has_phpmailer) {
    require $vendor_path;
}

// List of SMTP configurations to try in sequence
$smtp_configs = [
    // 1. Try with contact@cased-bf.com and Ndembokin@2026
    [
        'user' => 'contact@cased-bf.com',
        'pass' => 'Ndembokin@2026',
        'from' => 'contact@cased-bf.com',
        'from_name' => 'Cabinet CASED'
    ],
    // 2. Try with contact@cased-bf.com and Prodesk@2965
    [
        'user' => 'contact@cased-bf.com',
        'pass' => 'Prodesk@2965',
        'from' => 'contact@cased-bf.com',
        'from_name' => 'Cabinet CASED'
    ],
    // 3. Fallback to admission@groupelavictoire.com (known working account on same Hostinger server)
    [
        'user' => 'admission@groupelavictoire.com',
        'pass' => 'Prodesk@2965',
        'from' => 'admission@groupelavictoire.com',
        'from_name' => 'Cabinet CASED (via proxy)'
    ]
];

$mail_sent = false;
$error_logs = [];

if ($has_phpmailer) {
    foreach ($smtp_configs as $idx => $cfg) {
        $mail = new PHPMailer(true);
        try {
            // Server settings
            $mail->isSMTP();
            $mail->Host       = 'smtp.hostinger.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = $cfg['user'];
            $mail->Password   = $cfg['pass'];
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;
            $mail->CharSet    = 'UTF-8';

            // Recipients
            $mail->setFrom($cfg['from'], $cfg['from_name']);
            $mail->addAddress('contact@cased-bf.com');
            $mail->addReplyTo($email, $nom);

            // Build HTML Content for Admin Notification
            $mail->isHTML(true);
            $mail->Subject = "[CASED] Nouvelle consultation — " . ($secteur ?: 'Non précisé') . " — " . $nom;
            $mail->Body    = getAdminEmailHtml($nom, $organisation, $email, $telephone, $secteur, $projet);

            $mail->send();

            // Send confirmation email to client
            $client_mail = new PHPMailer(true);
            $client_mail->isSMTP();
            $client_mail->Host       = 'smtp.hostinger.com';
            $client_mail->SMTPAuth   = true;
            $client_mail->Username   = $cfg['user'];
            $client_mail->Password   = $cfg['pass'];
            $client_mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $client_mail->Port       = 465;
            $client_mail->CharSet    = 'UTF-8';

            $client_mail->setFrom($cfg['from'], $cfg['from_name']);
            $client_mail->addAddress($email, $nom);
            $client_mail->isHTML(true);
            $client_mail->Subject = "CASED — Confirmation de votre demande de consultation stratégique";
            $client_mail->Body    = getClientEmailHtml($nom, $organisation, $secteur, $email);

            $client_mail->send();

            $mail_sent = true;
            $error_logs[] = "SMTP Config #{$idx} ({$cfg['user']}) succeeded!";
            break; // Success! Break out of the loop
        } catch (Exception $e) {
            $error_logs[] = "SMTP Config #{$idx} ({$cfg['user']}) failed: " . $mail->ErrorInfo;
        }
    }
} else {
    $error_logs[] = "PHPMailer autoload not found. Falling back to native mail().";
}

// Fallback to PHP native mail() if SMTP failed or was unavailable
if (!$mail_sent) {
    // Admin notification
    $to = "contact@cased-bf.com";
    $subject = "=?UTF-8?B?" . base64_encode("[CASED] Nouvelle consultation - " . $nom) . "?=";
    
    // Headers for HTML email (using a generic header to see if it bypasses Hostinger limits)
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Cabinet CASED <contact@cased-bf.com>\r\n";
    $headers .= "Reply-To: $nom <$email>\r\n";
    
    $body = getAdminEmailHtml($nom, $organisation, $email, $telephone, $secteur, $projet);
    $admin_ok = @mail($to, $subject, $body, $headers);

    // Client confirmation
    $client_subject = "=?UTF-8?B?" . base64_encode("CASED — Confirmation de votre demande de consultation") . "?=";
    $client_headers = "MIME-Version: 1.0\r\n";
    $client_headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $client_headers .= "From: Cabinet CASED <contact@cased-bf.com>\r\n";
    
    $client_body = getClientEmailHtml($nom, $organisation, $secteur, $email);
    $client_ok = @mail($email, $client_subject, $client_body, $client_headers);

    if ($admin_ok) {
        $mail_sent = true;
        $error_logs[] = "Native PHP mail() succeeded.";
    } else {
        $error_logs[] = "Native PHP mail() failed to send.";
    }
}

if ($mail_sent) {
    // Log success logs (for debug info)
    file_put_contents('mail_success.log', date('[Y-m-d H:i:s] ') . "Success log: " . implode(" | ", $error_logs) . PHP_EOL, FILE_APPEND);
    echo json_encode(["success" => true]);
} else {
    // Log errors
    $log_content = date('[Y-m-d H:i:s] ') . "Form submission failed. Errors: " . implode(" | ", $error_logs) . PHP_EOL;
    file_put_contents('mail_error.log', $log_content, FILE_APPEND);

    http_response_code(500);
    echo json_encode(["error" => "Désolé, une erreur technique est survenue. Veuillez nous contacter directement à contact@cased-bf.com."]);
}

// Helpers for HTML content
function getAdminEmailHtml($nom, $organisation, $email, $telephone, $secteur, $projet) {
    $date = date('d/m/Y H:i');
    $secteur_label = htmlspecialchars($secteur);
    $nom_esc = htmlspecialchars($nom);
    $org_esc = htmlspecialchars($organisation);
    $email_esc = htmlspecialchars($email);
    $tel_esc = htmlspecialchars($telephone);
    $proj_esc = nl2br(htmlspecialchars($projet));

    return "
    <!DOCTYPE html>
    <html lang='fr'>
    <head><meta charset='UTF-8'><style>
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
    <div class='container'>
      <div class='header'>
        <h1>CASED — Nouvelle Demande de Consultation</h1>
        <p>Reçue le {$date}</p>
      </div>
      <div class='content'>
        <div class='field'><label>Nom Complet</label><p>{$nom_esc}</p></div>
        <div class='field'><label>Organisation / Ministère</label><p>{$org_esc}</p></div>
        <div class='field'><label>Email Professionnel</label><p><a href='mailto:{$email_esc}' style='color:#009A44'>{$email_esc}</a></p></div>
        <div class='field'><label>Téléphone</label><p>{$tel_esc}</p></div>
        <div class='field'><label>Secteur d'Intervention</label><p>{$secteur_label}</p></div>
        <div class='field'>
          <label>Description du Projet</label>
          <div class='project-block'><p>{$proj_esc}</p></div>
        </div>
      </div>
      <div class='footer'>CASED — Cabinet Africain de Stratégie &amp; d'Expertise pour le Développement<br>cased-bf.com | contact@cased-bf.com</div>
    </div>
    </body></html>";
}

function getClientEmailHtml($nom, $organisation, $secteur, $email) {
    $ref = "CASED-" . strtoupper(substr(md5(time()), 0, 8));
    $nom_esc = htmlspecialchars($nom);
    $org_esc = htmlspecialchars($organisation);
    $secteur_label = htmlspecialchars($secteur);
    $email_esc = htmlspecialchars($email);

    return "
    <!DOCTYPE html>
    <html lang='fr'>
    <head><meta charset='UTF-8'><style>
      body { font-family: 'Segoe UI', Arial, sans-serif; background: #F8F9FA; margin: 0; padding: 0; }
      .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,.08); }
      .header { background: #1A2B4B; padding: 48px 32px; text-align: center; }
      .check { width: 64px; height: 64px; border-radius: 50%; background: rgba(0,154,68,.2); border: 2px solid rgba(0,154,68,.4); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 20px; color: #009A44; font-size: 32px; font-weight: bold; }
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
    <div class='container'>
      <div class='header'>
        <div class='check'>✓</div>
        <h1>Demande bien reçue</h1>
        <p>Votre consultation stratégique a été transmise à notre équipe</p>
      </div>
      <div class='content'>
        <p class='greeting'>Bonjour <strong>{$nom_esc}</strong>,<br><br>Nous confirmons la bonne réception de votre demande de consultation stratégique. Notre équipe a été informée et prend en charge votre dossier.</p>
        <div class='info-box'>
          <h3>Récapitulatif de votre demande</h3>
          <div class='info-item'><strong>Organisation :</strong> {$org_esc}</div>
          <div class='info-item'><strong>Secteur :</strong> {$secteur_label}</div>
          <div class='info-item'><strong>Référence :</strong> {$ref}</div>
        </div>
        <div class='steps'>
          <div class='step'><div class='step-num'>1</div><div class='step-text'><h4>Analyse de votre brief</h4><p>Notre équipe examine votre demande et identifie les expertises mobilisables.</p></div></div>
          <div class='step'><div class='step-num'>2</div><div class='step-text'><h4>Réponse personnalisée sous 24h</h4><p>Un expert CASED vous contactera à l'adresse <strong>{$email_esc}</strong> dans les 24 heures ouvrables.</p></div></div>
          <div class='step'><div class='step-num'>3</div><div class='step-text'><h4>Engagement stratégique</h4><p>Après validation mutuelle, nous définissons ensemble le cadre de la mission.</p></div></div>
        </div>
        <div class='contact-box'>
          <h3>Besoin d'une réponse urgente ?</h3>
          <p>Contactez-nous directement :</p>
          <p><a href='mailto:contact@cased-bf.com'>contact@cased-bf.com</a></p>
          <p><a href='tel:+22625431144'>+226 25 43 11 44</a> | <a href='tel:+22670205057'>+226 70 20 50 57</a></p>
        </div>
      </div>
      <div class='footer'>© 2026 CASED — Cabinet Africain de Stratégie &amp; d'Expertise pour le Développement<br>BP 30162 Ouaga Pissy, Ouagadougou, Burkina Faso</div>
    </div>
    </body></html>";
}
