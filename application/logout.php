<?php
if(!session_id()){
    session_start();
}
?>
<?php
session_destroy();
header("Location: ../public/index.php");
?>
