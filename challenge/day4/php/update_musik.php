<?php
require "db.php";
$query = $db->query("SELECT * FROM musik ORDER BY `id` DESC");
$num = $query->num_rows;
if ($num !=0){
    while ($row = $query->fetch_array()){
        echo "
          <li onclick='play_musik(this)' data-src='res/mp3/$row[musik_name]'><a href=\"#\"  </a> $row[musik_name]</li>
        ";
    }
}
$db->close();
?>