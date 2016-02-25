<?php
include "functions.php";
include "connect.php";
$s = $_GET['s'];
$e = $_GET['e'];
$sql = "SELECT moisture, reading_time, probe FROM soil_data WHERE reading_time BETWEEN " . $s . " AND " . $e . " ORDER BY reading_time, probe ASC";
$statement = $db->prepare($sql);
$statement->execute();
if ($readings = $statement->fetchAll()) {
    $json = json_encode($readings);
    echo $json;
}
?>
