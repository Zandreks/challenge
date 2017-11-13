function update_page(e) {
    let id = $(e).attr("id");
    $(".navbar-nav li").each(function () {
        $(".navbar-nav li").removeClass("active")
    });
    $(e).addClass("active");
    $.ajax({
        url: "php/update_page.php",
        type: "POST",
        data: ({id: id}),
        dataType: "html",
        success: function (data) {
            $(".content-page").html("");
            $(".content-page").hide();
            $(".content-page").html(data);
            $(".content-page").show(500);
            $(".close").show(500);

        }
    })
}
function update_blogs() {
    $(".navbar-nav li").each(function () {
        $(".navbar-nav li").removeClass("active")
    });
    $("#home").addClass("active");
    $(".content-page").html("");
    $(".content-page").hide();
    $(".content-page").html("<div class='col-md-4 '><div id='post-1' class='post' onclick='update_blog(this)'><h3>Помнят плохое, и вознаградить тяжёлый труд своих сотрудников.</h3><div class='post-immg'><img src='res/img/Mobtech2.png' class='img-responsive' ></div><div class='post-text'><p>\
        Что-то хорошее сказать, в первую. Них уроки изворотливости, которые подмочат вашу сторону всё равно\
    что учиться. Быть предпринимателем и захватывающей дух, попробуйте стать бизнесменом\
    предпринимательская жилка. Печать их прошлых ошибок, от чего. Публика легко простит вам все свои\
    обещания. Ваши ошибки на которых лежала. Них подходящее место наверное. Лицемерия и заслуживающих\
    доверия бизнесменов.\
</p>\
</div>\
</div>\
</div>\
<div class='col-md-4'>\
        <div id='post-2' class='post' onclick='update_blog(this)'>\
            <h3>Помнят плохое, и вознаградить тяжёлый труд своих сотрудников.</h3>\
            <div class=post-immg'>\
                <img src='res/img/presentation.jpg' class='img-responsive' >\
            </div>\
            <div class='post-text'>\
                <p>\
                    Что-то хорошее сказать, в первую. Них уроки изворотливости, которые подмочат вашу сторону всё равно\
                    что учиться. Быть предпринимателем и захватывающей дух, попробуйте стать бизнесменом\
                    предпринимательская жилка. Печать их прошлых ошибок, от чего. Публика легко простит вам все свои\
                    обещания. Ваши ошибки на которых лежала. Них подходящее место наверное. Лицемерия и заслуживающих\
                    доверия бизнесменов.\
                </p>\
                </div>\
                </div>\
                </div>\
                <div class='col-md-4'>\
                <div id='post-3' class='post' onclick='update_blog(this)'>\
                <h3>Помнят плохое, и вознаградить тяжёлый труд своих сотрудников.</h3>\
                <div class='post-immg'>\
                <img src='res/img/business-2717063_960_720.jpg' class='img-responsive'>\
                </div>\
                <div class='post-text'>\
                <p>\
                Что-то хорошее сказать, в первую. Них уроки изворотливости, которые подмочат вашу сторону всё равно\
                что учиться. Быть предпринимателем и захватывающей дух, попробуйте стать бизнесменом\
                предпринимательская жилка. Печать их прошлых ошибок, от чего. Публика легко простит вам все свои\
                обещания. Ваши ошибки на которых лежала. Них подходящее место наверное. Лицемерия и заслуживающих\
                доверия бизнесменов.\
            </p>\
        </div>\
    </div>\
</div>");
    $(".content-page").show(500);
}

function update_blog(e) {
    let id = $(e).attr("id");
        $.ajax({
                url: "php/update_page.php",
                type: "POST",
                data: ({id:id}),
                dataType: "html",
                success: function (data) {
                    $(".content-page").html("");
                    $(".content-page").hide();
                    $(".content-page").html(data);
                    $(".content-page").show(500);
                    $(".close").show(500);
                }
            })
}