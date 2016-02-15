<?php
include "../application/header.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Sense My Soil</title>

    <!-- Bootstrap Core CSS -->
    <link href="../library/bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- MetisMenu CSS -->
    <link href="../library/bower_components/metisMenu/dist/metisMenu.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="../application/dist/css/sb-admin-2.css" rel="stylesheet">
    <link href="../application/dist/css/dirt.css" rel="stylesheet">
    <link href="../application/dist/css/dashboard.css" rel="stylesheet">

    <!-- Custom Fonts -->
    <link href="../library/bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="https://www.google.com/jsapi"></script>
    <script src="../application/js/chart-functions.js"></script>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

</head>

<body>

    <div id="wrapper">

        <!-- Navigation -->
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="dashboard.php">Sense My Soil</a>
            </div>

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i>  <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <form name="logout" action="../application/logout.php" method="post">
                            <li><a onclick="logout.submit();"><i class="fa fa-sign-out fa-fw"></i> Logout</a></li>
                        </form>
                    </ul>
                </li>
            </ul>

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="dashboard.php"><i class="fa fa-dashboard fa-fw"></i> Current Readings</a>
                        </li>
                        <li>
                            <a class="clickable" id="temperature"><i class="fa fa-dashboard fa-fw"></i> Temperature</a>
                        </li>
                        <li>
                            <a class="clickable" id="moisture"><i class="fa fa-dashboard fa-fw"></i> Moisture</a>
                        </li>
                        <li>
                            <a class="clickable" id="salinity"><i class="fa fa-dashboard fa-fw"></i> Salinity</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- Page Content -->
        <div id="page-wrapper">
            <div class="container-fluid" id="current_readings">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="page-header">Welcome, <?php echo $_SESSION['first_name']; ?>!</h1>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <div class="row">
                    <div class="col-lg-offset-1 col-lg-2 col-lg-offset-9">
                        <label>Select Probe</label>
                        <select class="form-control" id="probes">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <br>
                <div id="probe1readings">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Salinity
                                </div>
                                <div class="panel-body">
                                    <h1>35 ppt</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Moisture
                                </div>
                                <div class="panel-body">
                                    <h1>80%</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Temperature
                                </div>
                                <div class="panel-body">
                                    <h1>85</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="probe2readings">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Salinity
                                </div>
                                <div class="panel-body">
                                    <h1>38 ppt</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Moisture
                                </div>
                                <div class="panel-body">
                                    <h1>81%</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Temperature
                                </div>
                                <div class="panel-body">
                                    <h1>82</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="probe3readings">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Salinity
                                </div>
                                <div class="panel-body">
                                    <h1>40 ppt</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Moisture
                                </div>
                                <div class="panel-body">
                                    <h1>78%</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Temperature
                                </div>
                                <div class="panel-body">
                                    <h1>81</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="probe4readings">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Salinity
                                </div>
                                <div class="panel-body">
                                    <h1>36 ppt</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Moisture
                                </div>
                                <div class="panel-body">
                                    <h1>87%</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="panel panel-info">
                                <div class="panel-heading">
                                    Temperature
                                </div>
                                <div class="panel-body">
                                    <h1>86</h1>
                                </div>
                                <div class="panel-footer">
                                    Last Checked: 4:51 PM
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid" id="chart"></div>
        </div>

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->
    <script src="../library/bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="../library/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Metis Menu Plugin JavaScript -->
    <script src="../library/bower_components/metisMenu/dist/metisMenu.min.js"></script>

    <!-- Custom Theme JavaScript -->
    <script src="../application/dist/js/sb-admin-2.js"></script>
    <script src="../application/dist/js/dirt.js"></script>

</body>

</html>
