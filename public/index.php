<?php
if(!session_id()){
    session_start();
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Login to Sense My Soil</title>
        <link rel="stylesheet" type="text/css" href="../library/bower_components/bootstrap/dist/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="../application/dist/css/dirt.css">
        <link rel="stylesheet" type="text/css" href="../application/dist/css/login.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
        <script src="//use.edgefonts.net/piedra;rock-salt.js"></script>
    </head>
    <body>
        <div class="container" id="login-panel">
            <h1 id="login-title">Sense My Soil</h1>
            <?php if ($_SESSION['login_error']) echo "<div class=\"alert alert-danger\"><strong>Username/Password incorrect</strong></div>"; ?>
            <form action="../application/login.php" method="post">
                <div class="input-group">
                    <span class="input-group-addon<?php if ($_SESSION['login_error']) echo " has-error"; ?>" id="basic-addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                    <input name="username" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group">
                    <span class="input-group-addon<?php if ($_SESSION['login_error']) echo " has-error"; ?>" id="basic-addon1"><i class="fa fa-key"></i></span>
                    <input name="password" type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1a" required>
                </div>
                <div class="form-group">
                    <input type="submit" id="login-button" class="btn btn-primary" value="Log In">
                </div>
                <div class="form-group">
                    <p>Not signed up yet? <a href="newuser.php" class="btn btn-link" style="padding: 0;">Click here</a> to sign up for Sense My Soil.</p>
                </div>
            </form>
        </div>
        <!-- jQuery -->
        <script src="../library/bower_components/jquery/dist/jquery.min.js"></script>

        <!-- Bootstrap Core JavaScript -->
        <script src="../library/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

        <script src="../application/dist/js/dirt.js"></script>

    </body>
</html>
