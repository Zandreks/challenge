<?php
session_start();
require "db.php";
$name = htmlspecialchars($_POST["name"]);
$query = $db->query("SELECT * FROM user WHERE user_name = '$name'");
$row = $query->num_rows;
if ($row>0){
    echo "no";
}else{
    echo "ok";
}
$db->close();
?>