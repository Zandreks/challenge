const content = $(".content");
const close = $(".close");
let ShowBlok = () => {
    content.hide();
    content.html(`
            <div class="form-group">
            <label for="head">Введите тему</label>
            <input type="text" class="form-control" onkeyup="" id="head">
            <label for="name">Введите имя</label>
            <input type="text" class="form-control" id="name">
            <label for="text">Введите текст</label>
            <textarea id="text" class = "form-control" rows = "3"></textarea>
            <p class="bg-danger" id="error"></p>
            <button type="button" onclick="sendTema()" class="btn btn-warning btn-block ">Добавить
            </button>
    
        </div>
    </div>
`);
    close.show();
    content.show(500);
};

let sendTema = () => {
    let head = $("#head").val();
    let name = $("#name").val();
    let text = $("#text").val();
    if (head.length < 3 || head.length > 30) {
        $("#error").text("Заголовок должен быть больше 3 символов и меньше 30 символов");
        return false;
    }
    if (name.length < 3 || name.length > 15) {
        $("#error").text("Имя должно быть больше 3 символов и меньше 15 символов");
        return false;
    }
    if (text.length < 3) {
        $("#error").text("Текст должен быть больше 3 символов");
        return false;
    }
    $.ajax({
        url: "php/senndTema.php",
        type: "POST",
        data: ({head: head, name: name, text: text}),
        dataType: "html",
        success: function (data) {
            if (data == "ok") {
                updateForum()
            }
        }
    })

};

let updateForum = () => {
    $.ajax({
        url: "php/updateForum.php",
        type: "POST",
        data: ({}),
        dataType: "html",
        success: function (data) {
            content.hide();
            close.hide();
            content.html(data);
            content.show(500);
        }
    })
};

let updateTema = e =>{
    let id = $(e).attr("id");
        $.ajax({
                url: "php/updateTema.php",
                type: "POST",
                data: ({id:id}),
                dataType: "html",
                success: function (data) {
                    content.hide();
                    content.html(data);
                    content.show(500);
                    close.show();
                }
            })
};

let sendComent = ()=>{
    let temaId = $(".temaCom").attr("id");
    let id =$(".temaCom");
    let nameComent = $("#nameComent").val();
    let textComent = $("#textComent").val();
    if (nameComent.length<3||nameComent.length>15){
        $("#errorComent").text("Имя должно быть больше 3 символов и меньше 15 символов");
        return false;
    }
        $.ajax({
                url: "php/sendComent.php",
                type: "POST",
                data: ({nameComent:nameComent,textComent:textComent,temaId:temaId}),
                dataType: "html",
                success: function (data) {
                    if (data=="ok"){
                        updateTema(id);
                    }
                }
            })
};