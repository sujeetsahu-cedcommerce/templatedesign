$(document).ready(function(){
    $("#cpwd").keyup(function(){
        if($(this).val() != $("#pwd").val().substr(0,$(this).val().length))
        {
            $("#message").text("password is not match");
            $("#message").css("color", "red");
        }
    });


    $("#evenbutton").click(function(){
        $("tr:even").css("color", "LightGray");
    });
    $("#oddbutton").click(function(){
        $("tr:odd").css("background-color", "DodgerBlue");
    });
});
