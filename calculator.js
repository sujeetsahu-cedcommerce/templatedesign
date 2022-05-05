document.get
function display(val)
{
    value = document.getElementById("takeinput").value += val;
}

function calculate()
{   
   var text = document.getElementById("takeinput").value;
   var result = eval(text);
   reset();
   display(result);
}

function reset()
{
    document.getElementById("takeinput").value ="";
}

