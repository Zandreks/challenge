<?php
require "db.php";
$id = htmlspecialchars($_POST["id"]);
$query = $db->query("SELECT * FROM forumTema WHERE id ='$id'");
$row = $query->fetch_array();
$mees="
     <div class=\"temaCom\" id=\"$row[id]\">
                        <h3>$row[head_tema]</h3>
                        <p id=\"name\">$row[name_tema]</p>
                        <p id=\"text\">$row[text_tema]<p>
                    </div>
    ";
$mees.="<p class='temaOtv'>Ответы</p>";

$query_coment = $db->query("SELECT * FROM comentTema WHERE id_coment ='$id'");
$num = $query_coment ->num_rows;
if ($num<1){
    $mees.=" <div class=\"temaCom\" onclick='updateTema(this)' id=\"$row[id]\">
                        <p style='text-align: center;font-size: 18px;'>Ответов нет</p>
                    </div>";
}else{
    while ($row_coment = $query_coment->fetch_array()){
        $mees.="<div class=\"temaCom\"  id=\"$row_coment[id]\">
                        <p id=\"name\">$row_coment[name_coment]</p>
                        <p id=\"text\">$row_coment[text_coment]<p>
                    </div>";
    }
}

$mees.=" <div class=\"form-group\">
            <h3 style='text-align: center'>Ответить на вопрос</h3>
            <label for=\"nameComent\">Введите имя</label>
            <input type=\"text\" class=\"form-control\" id=\"nameComent\">
            <label for=\"textComent\">Введите текст</label>
            <textarea id=\"textComent\" class = \"form-control\" rows = \"3\"></textarea>
            <p class=\"bg-danger\" id=\"errorComent\"></p>
            <button type=\"button\" onclick=\"sendComent()\" class=\"btn btn-warning btn-block \">Добавить
            </button>
    
        </div>
    </div>";
echo $mees;
$db->close();
?>