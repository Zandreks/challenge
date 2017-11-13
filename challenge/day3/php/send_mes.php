<?php
session_start();
require "db.php";
$query = $db->query("SELECT * FROM mesen");
$num = $query->num_rows;
if ($num ==0){
   echo "<div class='non_chat'> Чат пуст </div>";
   exit();
}
while($row = $query->fetch_array()){

    echo "<div class='chat_mes'>
            <div><span class='name_chat'> $row[user_name]</span></div>
            <div><span class='mes_chat'>$row[mes]</span></div> 
               </div>


";
}
$db->close();
?>
