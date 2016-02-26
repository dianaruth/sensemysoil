<?php
include "functions.php";
include "connect.php";
$sql = "SELECT reading_time FROM soil_data ORDER BY reading_time DESC LIMIT 1";
$statement = $db->prepare($sql);
$statement->execute();
if ($readings = $statement->fetch()) {
    echo json_encode($readings);
}
?>
