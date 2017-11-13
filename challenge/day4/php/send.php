<?php
session_start();
require "db.php";
$num_arr = sizeof($_FILES);

define("MAX_SIZE","20090");
function getExtension($str) {
    $i = strrpos($str,".");
    if (!$i) { return ""; }
    $l = strlen($str) - $i;
    $ext = substr($str,$i+1,$l);
    return $ext;
}
$arr =array();
$valid_formats = array("mp3", "wma", "ogg", "aac");
if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST" and $num_arr>0)  {
    $uploaddir = "../res/mp3/";
    foreach ($_FILES['file']['name'] as $name => $value) {
        $filename = stripslashes($_FILES['file']['name'][$name]);
        $size = filesize($_FILES['file']['tmp_name'][$name]);
        $ext = getExtension($filename);
        $ext = strtolower($ext);

        if(in_array($ext, $valid_formats)) {
            if($size < (MAX_SIZE*1024)){
                $musik_name = $filename ;
                $newname = $uploaddir . $musik_name;

                if(move_uploaded_file($_FILES['file']['tmp_name'][$name], $newname)) {
                    $time = time();
                    $db->query("INSERT INTO musik (`musik_name`) VALUES ('$musik_name')");

                } else {
                    echo 'Недостаточно памяти для сохранения!';
                    exit();
                }

            } else {
                echo 'Ошибка! Файл слишком велик!';
                exit();
            }

        } else {
            echo 'Данный формат запрещен!';
            exit();
        }
    }

}
echo "Трек загружен";
$db->close();

?>
