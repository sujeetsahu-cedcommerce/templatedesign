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


    $("#submit").click(function(){
        if($("#firstname").val() == ""){
            
                $("#firstname").css("background-color", "red");
                $("#firstname").focus();
                alert("please fill first name");
            }
        
         else if($("#secondname").val() == ""){
           
                $("#secondname").css("background-color", "red");
                $("#secondname").focus();
                alert("please fill second name");
         }
         else{
            alert("submitted");
         }


        });

        $("#firstname").keydown(function(){
            $("#firstname").css("background-color", "white");
        });
        $("#secondname").keydown(function(){
            $("#secondname").css("background-color", "white");
        });

});
