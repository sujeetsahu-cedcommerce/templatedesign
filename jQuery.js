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

        
        $("#eduinfo").on('click','.minus',function(){
            $(this).closest('tr').remove();
          });

        $("#eduinfo").on('click','.plus',function(){
            studentTable();
        });
        studentTable();
        function studentTable()
        {
             $("#eduinfo").append("<table><tr><td><input id='enterClass' type='text' placeholder='enter class'></td><td><input id='enterboard' type='text' placeholder='enter board'></td><td><input id='entermarks' type='text' placeholder='enter marks'></td><td><input id='enterdivision' type='text' placeholder='enter division'></td><td><button type='button' class='plus'>+</ td><td><button type='button' class='minus'>-</button></td> </tr></table>")
        }

        


        setInterval(function(){
            $(".test p:first-child").css("color","blue");
            $(".test p:last-child").css("color","green");
        },5000);


        // $("#prev").click(function(){
        //     $("img").attr("src" ,"sunrise.jpeg");
        // });


        $(".buttons").on('click','#prev',function() {
            // Change src attribute of image
            $("img").attr("src", "winterimages.jpeg");
          });

        $(".buttons").on('click', '#next',function() {
            // Change src attribute of image
            $("img").attr("src", "download.jpeg");
          });
});


