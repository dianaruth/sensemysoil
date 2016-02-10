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
        <div class="container" id="login-panel" style="margin-top: 8%;">
            <h1 id="login-title">Sign Up for Sense My Soil</h1>
            <?php if ($_SESSION['newuser_error']) echo "<div class=\"alert alert-danger\"><strong>Passwords do not match.</strong></div>"; ?>
            <form action="../application/addnewuser.php" method="post">
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                            <input name="firstName" type="text" class="form-control" placeholder="First Name" aria-describedby="basic-addon1" required>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="input-group">
                            <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                            <input name="lastName" type="text" class="form-control" placeholder="Last Name" aria-describedby="basic-addon1" required>
                        </div>
                    </div>
                </div>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user" aria-hidden="true"></span></span>
                    <input name="username" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                    <input name="password1" type="password" class="form-control" placeholder="Password" aria-describedby="basic-addon1" required>
                </div>
                <div class="input-group">
                    <span class="input-group-addon" id="basic-addon1"><i class="fa fa-key"></i></span>
                    <input name="password2" type="password" class="form-control" placeholder="Confirm Password" aria-describedby="basic-addon1" required>
                </div>
                <div class="form-group">
                    <input type="submit" id="login-button" class="btn btn-primary" value="Sign Up">
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
