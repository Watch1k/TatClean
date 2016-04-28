<?php
if ($_POST) {
        $to_email = "youremail@gmail.com"; //Recipient email, Replace with own email here
        
        //check if its an ajax request, exit if not
        if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
            
            $output = json_encode(array( //create JSON data
                'type'=>'error', 
                'text' => 'Sorry Request must be Ajax POST'
            ));
            die($output); //exit script outputting json data
        } 
        
        //Sanitize input data using PHP filter_var().
        $mail_square = filter_var($_POST["mail_square"], FILTER_SANITIZE_STRING);
        $mail_phone = filter_var($_POST["mail_phone"], FILTER_SANITIZE_STRING);

        // subject
        $subject = "RUMR site";
        
        //email body
        $message_body = "Метраж: ".$mail_square."\r\nТелефон: ".$mail_phone;
        
        //proceed with PHP email.
        $headers = 'From: '.$mail_square.'' . "\r\n" .
        'Reply-To: '.$mail_phone.'' . "\r\n";
        
        $send_mail = mail($to_email, $subject, $message_body, $headers);
        
        if(!$send_mail)
        {
            //If mail couldn't be sent output error. Check your PHP email configuration (if it ever happens)
            $output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
            die($output);
        }else{
            $output = json_encode(array('type'=>'message', 'text' => 'Hi '.$mail_square .' Thank you for your email'));
            die($output);
        }
    }
?>