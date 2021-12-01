<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "saya.casinovidal@gmail.com, alicianami@hotmail.com";
$email_subject = "Contacto desde el sitio web";
$email_from = "penguinpush@comentario.info";
    
// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['nombre']) ||
!isset($_POST['email']) ||
!isset($_POST['edad'])||
!isset($_POST['aceptacion'])||
!isset($_POST['valor'])||
!isset($_POST['comentarios'])||
!isset($_POST['genero'])){

print "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
print "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['nombre'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "edad: " . $_POST['edad'] . "\n\n";
    $email_message .= "privacidad: " . $_POST['aceptacion'] . "\n\n";
    $email_message .= "valoracion: " . $_POST['valor'] . "\n\n";
    $email_message .= "Comentarios: " . $_POST['comentarios'] . "\n\n";
    $email_message .= "genero: " . $_POST['genero'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

print "<div style='position: relative;
        width: 100%;
        height: 2em;
        magin:0;
        padding:0;
        border: none;
        text-shadow: 1px 1px #f00;
        font-family: titulob;
        font-size: 1em;
        text-align: center;
        color: red;'>
            ¡El formulario se ha enviado con éxito!
        </div>";
}
?>
