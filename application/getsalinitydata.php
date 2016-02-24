<?php
include "functions.php";
include "connect.php";
$sql = "SELECT salinity, reading_time, probe FROM soil_data ORDER BY reading_time, probe ASC";
$statement = $db->prepare($sql);
$statement->execute();
if ($readings = $statement->fetchAll()) {
    $json = json_encode($readings);
    echo $json;
}
?>
