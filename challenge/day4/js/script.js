function send_musik() {
    let data = new FormData();
    let error = '';

    $.each($('#file')[0].files, function (i, file) {

        if (file.name.length < 1) {
            error = error + ' Файл имеет неправильный размер имени! ';

        }

        if (file.size > 20000000) {
            error = error + 'Файл ' + file.name + ' слишком большой.';
        }


        data.append('file[]', file);
    });

    if (error != '') {
        alert(error);
        return false;
    } else {

        $.ajax({
            url: 'php/send.php',
            data: data,
            cache: false,
            contentType: false,
            processData: false,
            type: 'POST',
            beforeSend: function () {
                $("#eroor").html("<img src='res/gifanim.gif'>");
                $("#send").attr("onclick", "notsend()");

            },
            success: function (data) {
                $("#send").attr("onclick", "send_musik()");
                $("#eroor").html("");
                alert(data);
                let file = document.querySelector('#file'),
                    removeBtn = document.querySelector('#send');
                file.value = '';
                update_musik();
            }
        })
    }
}

function notsend() {
    alert("Идет загрузка треков подождите");
}
function update_musik() {
    $.ajax({
        url: "php/update_musik.php",
        type: "POST",
        data: ({}),
        dataType: "html",
        success: function (data) {

            $(".play-list ol ").html(data);

        }
    })
}

function play_musik(e) {
    var src = $(e).attr("data-src");
    $(".play-list ol li").each(function () {
        $(".play-list ol li").removeClass("playing")
    });
    $(".plever").html("<audio controls class='play'><source src='"+src+"' type='audio/mpeg'></audio>");
    $(e).addClass("playing");
    var audio = $(".play")[0];
    audio.play();
}

