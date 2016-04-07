<?php
if(!session_id()){
    session_start();
}
?>
<?php
include "connect.php";
include "functions.php";
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$username = $_POST['username'];
$password1 = $_POST['password1'];
$password2 = $_POST['password2'];
if (!($password1 === $password2)) {
    $_SESSION['newuser_error'] = True;
    header("Location: ../public/newuser.php");
}
else {
    $sql = "INSERT INTO users (username, hashed_password, first_name, last_name) VALUES (:username, :password, :firstName, :lastName);";
    $statement = $db->prepare($sql);
    $statement->bindParam(':username', $_POST['username']);
    $statement->bindParam(':password', passwordEncrypt($_POST['password1']));
    $statement->bindParam(':firstName', $firstName);
    $statement->bindParam(':lastName', $lastName);
    $statement->execute();
    $db = null;
    $_SESSION['username'] = $username;
    $_SESSION['first_name'] = $firstName;
    $_SESSION['last_name'] = $lastName;
    $_SESSION['newuser_error'] = False;
    header("Location: ../public/dashboard.php");
}
?>
