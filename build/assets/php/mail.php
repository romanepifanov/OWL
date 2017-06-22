<?
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$email = $_POST['user_email'];
$text = $_POST['user_text'];

$to = "owl_company@mail.ru";
$subject = "Новый клиент";

$message = '
<html>
<head>
    <title>Новый клиент</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="http://owlcom.h1n.ru/assets/css/mail.css">
</head>
<body>
    <div>ФИО:'$name'</div>
    <div>Телефон:'$phone'</div>
    <div>Почта:'$email'</div>
    <div>Текст:'$text'</div>
</body>
</html>
';

$headers= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= "От: http://owlcom.h1n.ru";

if(mail($to, $subject, $message, $headers);) {
    $yes = true;
    print json_encode($yes);
}

?>