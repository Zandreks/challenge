<?php
require "db.php";
$head = htmlspecialchars($_POST["head"]);
$name = htmlspecialchars($_POST["name"]);
$text = htmlspecialchars($_POST["text"]);

$db->query("insert into forumTema (`head_tema`,`name_tema`,`text_tema`) values ('$head','$name','$text')");
echo "ok";
$db->close();
?>