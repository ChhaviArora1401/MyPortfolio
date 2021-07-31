<?php 

if (isset($_POST['submit'])) {
    $name = $POST['name'];
    $subject = $_POST['name'];
    $name = $_POST['subject'];
    $mailForm = $_POST['mail'];
    $message = $_POSt['message'];

    $mailTo = "chhaviarora1401@gmail.com";
    $headers = "From: ".$mailForm;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.html?mailsend");
}
