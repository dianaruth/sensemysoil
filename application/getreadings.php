<?php
include "functions.php";
include "connect.php";
$q = intval($_GET['q']);
$sql = "SELECT temperature, moisture, salinity, reading_time FROM soil_data WHERE probe = :probe ORDER BY reading_time LIMIT 1";
$statement = $db->prepare($sql);
$statement->bindParam(':probe', $q);
$statement->execute();
if ($readings = $statement->fetch()) {
    echo "<div class='row'><div class='col-lg-4'><div class='panel panel-info'><div class='panel-heading'>Salinity</div><div class='panel-body'><h1>";
    echo $readings['salinity'];
    echo "</h1></div><div class='panel-footer'>Last checked: ";
    echo $readings['reading_time'];
    echo "</div></div></div><div class='col-lg-4'><div class='panel panel-info'><div class='panel-heading'>Moisture</div><div class='panel-body'><h1>";
    echo $readings['moisture'];
    echo "</h1></div><div class='panel-footer'>Last checked: ";
    echo $readings['reading_time'];
    echo "</div></div></div><div class='col-lg-4'><div class='panel panel-info'><div class='panel-heading'>Temperature</div><div class='panel-body'><h1>";
    echo $readings['temperature'];
    echo "</h1></div><div class='panel-footer'>Last checked: ";
    echo $readings['reading_time'];
    echo + "</div></div></div></div>";
}
else {
    echo "<h2>There is currently no data available for Probe ";
    echo $_GET['q'];
    echo ".</h1>";
}
?>
