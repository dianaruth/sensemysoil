<?php
if(!session_id()){
    session_start();
}
?>
<?php
// connect to database, quit on failure
try{
    // local database
    $db = new PDO('mysql:dbname=sensemysoil;host=127.0.0.1:3307', 'dirt', '');
}
catch(PDOException $e){
    die("Could not connect to the database.");
}
?>