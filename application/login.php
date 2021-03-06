<?php
if(!session_id()){
    session_start();
}
?>
<?php
include "functions.php";
include "connect.php";
$username = $_POST['username'];
$password = $_POST['password'];
$sql = "SELECT username, hashed_password, first_name, last_name FROM users WHERE username = :username LIMIT 1";
$statement = $db->prepare($sql);
$statement->bindParam(':username', $username);
$statement->execute();
if ($user = $statement->fetch()) {
    if (passwordCheck($password, $user['hashed_password'])) {
        // successful login, redirect to dashboard
        $_SESSION['username'] = $username;
        $_SESSION['login_error'] = False;
        $_SESSION['first_name'] = $user['first_name'];
        $_SESSION['last_name'] = $user['last_name'];
        header("Location: ../public/dashboard.php");
    }
    else {
        // password is incorrect
        $_SESSION['login_error'] = True;
        header("Location: ../public/index.php");
    }
}
else {
    // username is incorrect
    $_SESSION['login_error'] = True;
    header("Location: ../public/index.php");
}
?>
