<?php

 
    $name = $_POST['name']; // required
    $email = $_POST['email']; // required
    $phone = $_POST['phone']; // required    
    $message = $_POST['message']; // required
    $to = "mamun0320@gmail.com";
    $subject = "New Message";


    mail ($to, $subject, $message, "From: " . $name);
    echo "Your Messa has been send";

?>