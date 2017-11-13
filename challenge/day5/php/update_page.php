<?php
require "db.php";
$id = $_POST["id"];
$query = $db->query("SELECT * FROM page WHERE id_page = '$id' ");
$row = $query ->fetch_array();
echo "$row[head] $row[text]";
$db->close();