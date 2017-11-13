let content = $(".content");

let showNote = () => {
    content.hide();
    content.html(`<div class="contnot">
        <div class="form-group">
            <label for="head">Введите заголовок</label>
            <input type="text" class="form-control" id="head">
            <label for="text">Введите текст</label>
            <textarea id="text" class = "form-control" rows = "3"></textarea>
            <p class="bg-primary" id="error"></p>
            <button type="button" onclick="sendNote()" class="btn btn-warning btn-block ">Добавить
            </button>
    
        </div>
    </div>`);
    content.show(500);
    $(".close").show();
}


let sendNote = () => {
    let head = $("#head").val();
    if (head.length < 3) {
        $("#error").text("Заголовок должен иметь больше 3 символов");
        return false;
    }
    let text = $("#text").val();
    if (text.length < 3) {
        $("#error").text("Текст должен иметь больше 3 символов");
        return false;
    }
    $.ajax({
        url: "php/send_note.php",
        type: "POST",
        data: ({
            head: head, text: text
        }),
        dataType: "html",
        success: function (data) {
            if (data == "ok") {
                updateNote();
            }
        }

    });
}

let updateNote = () => {
    $.ajax({
        url: "php/update_note.php",
        type: "POST",
        data: ({

        }),
        dataType: "html",
        success: function (data) {
            content.hide();
            content.html(`<ul>${data}</ul>`);
            content.show(500);
            $(".close").hide();
        }

    });
}
