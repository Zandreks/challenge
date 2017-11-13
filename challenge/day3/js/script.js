function login() {
    let name = $('#usr').val();
    if (name.length < 2) {
        $("#error").removeClass("text-success");
        $("#error").addClass("text-danger");
        $("#error").text("Ваше имя должно быть больше 2 символов");
        return false;
    }
    $.ajax({
        url: "php/login.php",
        type: "POST",
        data: ({
            name: name
        }),
        dataType: "html",
        success: function (data) {
            if (data == "ok") {
                $("#error").removeClass("text-danger");
                $("#error").addClass("text-success");
                $("#error").text("Имя свободно")
            } else {
                $("#error").removeClass("text-success");
                $("#error").addClass("text-danger");
                $("#error").text("Имя занято")
            }
        }
    })
}

function login_user() {
    let name = $('#usr').val();
    if (name.length < 2) {
        $("#error").text("Ваше имя должно быть больше 2 символов");
        return false;
    }
    $.ajax({
        url: "php/login_name.php",
        type: "POST",
        data: ({
            name: name
        }),
        dataType: "html",
        success: function (data) {
            if (data == "ok") {
                $(".form-login").hide(500);
                $(".chat").show(500)
            } else {
                $("#error").removeClass("text-success");
                $("#error").addClass("text-danger");
                $("#error").text("Имя занято")
            }
        }
    })
}

function mesen() {
    let mees = $("#mees").val()
    if (mees.length == 0) {
        return false;
    }
    $.ajax({
        url: "php/mesesn.php",
        type: "POST",
        data: ({
            mees: mees
        }),
        dataType: "html",
        success: function (data) {
            if (data == "ok") {
                $("#mees").val("")
            }
        }
    })
}

function send_mesen() {
    $.ajax({
        url: "php/send_mes.php",
        type: "POST",
        data: ({}),
        dataType: "html",
        success: function (data) {

            $(".chat-windows").html(data);
            let scrol = $(".chat-windows");
            scrol.scrollTop(scrol.prop('scrollHeight'));

        }
    })
}

function reset_chat() {
    $.ajax({
        url: "php/reset_chat.php",
        type: "POST",
        data: ({}),
        dataType: "html",
        success: function (data) {

            if (data = "ok") {
                send_mesen();
            }
        }
    })
}
function logout() {
    $.ajax({
        url: "php/logout.php",
        type: "POST",
        data: ({}),
        dataType: "html",
        success: function (data) {
            if (data = "ok") {
                $(".chat").hide(100);
                $(".form-login").show(500);
            }
        }
    })
}
