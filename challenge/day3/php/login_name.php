<?php
session_start();
require "db.php";
$name = htmlspecialchars($_POST["name"]);
$query = $db->query("SELECT * FROM user WHERE user_name = '$name'");
$row = $query->num_rows;
if ($row>0){
    echo "no";
    exit();
}else{
    $time = time();
    $db->query("INSERT INTO user (`user_name`,`user_time`) VALUES ('$name','$time')");
    $_SESSION["user_name"]=$name;
    echo "ok";
}
$db->close();
?>