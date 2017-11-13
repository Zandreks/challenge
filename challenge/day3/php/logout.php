<?php
session_start();
require "db.php";
$name = $_SESSION["user_name"];
$db->query("DELETE FROM user WHERE user_name = '$name'");
unset($_SESSION['user_name']);
session_destroy();
echo "ok";
$db->close();
?>