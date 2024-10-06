use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Make sure to include PHPMailer's autoload file

$mail = new PHPMailer(true);
try {
    //Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.example.com'; // Set the SMTP server to send through
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your_email@example.com'; // SMTP username
    $mail->Password   = 'your_email_password'; // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption
    $mail->Port       = 587; // TCP port to connect to

    //Recipients
    $mail->setFrom($email, $name);
    $mail->addAddress($address); // Add a recipient
    $mail->addReplyTo($email, $name); // Add a reply-to address

    // Content
    $mail->isHTML(true);
    $mail->Subject = $e_subject;
    $mail->Body    = nl2br($msg); // Convert newlines to HTML line breaks

    $mail->send();
    echo "<h3>Email Sent Successfully.</h3>";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
