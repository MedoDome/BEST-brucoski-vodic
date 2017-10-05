<?php
    function phpAlert($msg) {
        echo '<script type="text/javascript">alert("' . $msg . '")</script>';
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $msg = $_POST['message'];
        $cName = $_POST['companyName'];
        $mail = $_POST['mail'];

        $subject = "[BEST Mostar][BV] Contact form";
        $message = "Ime:" . $name . "\r\nCompany: " . $cName . "\r\nEmail: " . $mail . "\r\nPoruka: " . $msg;
        $headers = "From: no-reply@best-mostar.org" . "\r\n" .
            "Reply-To: no-reply@best-mostar.org" . "\r\n" .
            "X-Mailer: PHP/" . phpversion();
        mail('armin.comic@gmail.com', $subject, $message, $headers);

        phpAlert("Your email has been sent!");

    }
    else {
        phpAlert("Something went wrong. Please try again!");
        die();
    }
?>