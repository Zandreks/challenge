<?php
session_start();
require "db.php";
$query = $db->query("SELECT * FROM `mesen`");
$num = $query->num_rows;
if ($_SESSION['count'] != $num){
    $_SESSION['count'] = $num;
    echo "ok";
}else{
    exit();
}
$db->close();
?>