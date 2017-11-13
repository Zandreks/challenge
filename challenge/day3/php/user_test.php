<?php
require "db.php";
session_start();
$query = $db->query("SELECT * FROM user WHERE user_name = '$_SESSION[user_name]'");
$row =$query->num_rows;
$query2 = $db->query("SELECT * FROM `mesen`");
$num = $query2->num_rows;
$_SESSION['count'] = $num;
$time = time();
$db->query("DELETE FROM user WHERE user_time < $time -900");

if (isset($_SESSION["user_name"]) and $row==1) {
  echo "user_ok";
}else{
    echo "no";
}

$db->close();
?>
