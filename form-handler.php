<?php
$name = $_POST['sender-name'];
$visitor_email = $_POST['sender-email'];
$message = $_POST['message'];

$email_from = 'contact@sandeepmahato.live';

$email_subject = 'New Form Submission';

$email_body = "User Name: $name.\n".
              "User Email: $visitor_email.\n".
              "User Message: $message.\n";

$to = 'sandeepkumarmahato712@gmail.com';

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

?>