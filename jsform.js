

function validate()

{
    var age = document.getElementById("textage").value;
    var weight = document.getElementById("textweight").value;
 if (5<=age<=7)
   { 
    if (weight<15)
    { 
        document.getElementById("underweight").innerHTML="you are underweight";
    }
    else if(weight>20)
    {
        document.getElementById("overweight").innerHTML="you are overweight";
    }
    else
    {
        document.getElementById("keepitup").innerHTML="keep it up";
    }
   } 
 
   else if (8<=age<=10)
   { 
    if (weight<21)
    { 
        document.getElementById("underweight").innerHTML="you are underweight";
    }
    else if(weight>25)
    {
        document.getElementById("overweight").innerHTML="you are overweight";
    }
    else
    {
        
        document.getElementById("keepitup").innerHTML="keep it up";
    }
   } 

   else if (11<=age<=15)
   { 
    if (weight<26)
    { 
        document.getElementById("underweight").innerHTML="you are underweight";
    }
    else if(weight>30)
    {
        document.getElementById("overweight").innerHTML="you are overweight";
    }
    else
    {
        document.getElementById("keepitup").innerHTML="keep it up";
    }
   } 

   else if (16<=age<=20)
   { 
    if (weight<31)
    { 
        document.getElementById("underweight").innerHTML="you are underweight";
    }
    else if(weight>40)
    {
        document.getElementById("overweight").innerHTML="you are overweight";
    }
    else
    {
        document.getElementById("keepitup").innerHTML="keep it up";
    }
   } 
}

