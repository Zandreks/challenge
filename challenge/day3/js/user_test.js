$.ajax({
    url: "php/user_test.php",
    type: "POST",
    data: ({}),
    dataType: "html",
    success: function (data) {

        if (data == "user_ok") {
            $(".form-login").hide();
            $(".chat").show(500)
        }
    }
});