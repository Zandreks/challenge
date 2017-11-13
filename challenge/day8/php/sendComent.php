<?php
require "db.php";
$temaId= htmlspecialchars($_POST["temaId"]);
$name = htmlspecialchars($_POST["nameComent"]);
$text = htmlspecialchars($_POST["textComent"]);

$db->query("insert into comentTema(`name_coment`,`text_coment`,`id_coment`) values ('$name','$text','$temaId')");
echo "ok";
$db->close();
?>