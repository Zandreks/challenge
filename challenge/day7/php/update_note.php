<?php
require "db.php";
$query = $db->query("SELECT * FROM note");
$num = $query->num_rows;

while($row = $query->fetch_array()){

    echo "
       <li>
            <a href=\"#\" onclick=\"return false\">
                <h2>$row[head_note]</h2>
                <p>$row[text_note]</p>
            </a>
        </li>";
}
$db->close();
?>
