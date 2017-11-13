<?php
require "db.php";
$head = htmlspecialchars($_POST["head"]);
$text = htmlspecialchars($_POST["text"]);

$db->query("INSERT INTO note (`head_note`,`text_note`) VALUES ('$head','$text')");
echo "ok";
$db->close();

?>
