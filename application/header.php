<?php
if(!session_id()){
    session_start();
}
?>
<?php
// don't allow access unless logged in
if (!isset($_SESSION['username'])) {
    header("Location: ../public/index.php");
}
?>
<?php include 'functions.php'; ?>
