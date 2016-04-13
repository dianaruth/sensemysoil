<?php
if(!session_id()){
    session_start();
}
?>
<?php
// connect to database, quit on failure
try{
    // local database
    $db = new PDO('mysql:dbname=srdirtdb;host=130.211.139.53', 'root', 'srdirt2016');
}
catch(PDOException $e){
    die("Could not connect to the database.");
}
?>
