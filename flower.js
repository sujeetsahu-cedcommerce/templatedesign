
$(document).ready(function(){
    const flower=['rose','lily','lotus','sunflower','orchid','jasmine','dandelion'];

    $("#flwr").keyup(function(){
        var tempFlower=[];
        const len = $("#flwr").val().length;
        if($("#flwr").val()!=""){
            for(let i=0;i<flower.length;i++){
                var myflower =$("#flwr").val();
                if(myflower.toLowerCase() == flower[i].slice(0,len)){
                    tempFlower.push(flower[i]);
                }
            }
        }
        $("#display").text(tempFlower);
    });
});