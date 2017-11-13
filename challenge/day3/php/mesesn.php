<?php
session_start();
require "db.php";
$mes = htmlspecialchars($_POST["mees"]);
$name = $_SESSION["user_name"];
$query = $db->query("SELECT * FROM user WHERE user_name = '$name'");
$row = $query->num_rows;
if ($row ==0){

    exit();
}else{
    $arr = $query->fetch_array();
}
$id = $arr["id"];
$db->query("INSERT INTO mesen (`id_user`,`mes`,`user_name`) VALUES ('$id','$mes','$name')");
echo "ok";
$db->close();
?>