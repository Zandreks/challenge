<?php
require "db.php";
$query = $db->query("SELECT * FROM forumTema ORDER BY `id` DESC");
$num = $query->num_rows;

while ($row = $query->fetch_array()) {
    $rest = substr($row["text_tema"], 0, 15);
    echo "
     <div class=\"tema\" onclick='updateTema(this)' id=\"$row[id]\">
                        <h3>$row[head_tema]</h3>
                        <p id=\"name\">$row[name_tema]</p>
                        <p id=\"text\">$rest<p>
                    </div>
    ";
}
$db->close();
?>