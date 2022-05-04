const product = [
    ['Samsung' , 'Galaxy' , 64 , 1500],
    ['Nokia' , 'S730' ,128, 22000],
    ['Xiaomi' , 'Note' , 32 , 12000],
    ['Motorola' , 'G10', 32 , 14000],
    ['Apple' , 'S12' , 64 , 18000]
] 

//  console.table(product);
var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
for (let i=0 ; i<=4 ;i++)
{
    txt+="<tr>";
    for (let j=0 ;j<=3 ;j++)
    {
        var x = product[i][j];
        
        txt+="<td>"+x+"</td>";
    }  
    txt+="</tr>";
}
txt+="</table>";
//alert(text);
//document.write("Hello");
document.getElementById("divDisp").innerHTML=txt;



function mysearch()
{
    var select = document.getElementById("selectitem").value;
    var search = documdevice +="</table>";
    var text="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";

    for( let i=0; i<=4; i++)
    {
        for( let j=select; j<=select; j++)
        {
            if(product[i][j]==search)
            {   
                text += "<tr>";
                for( let k=0;k<=3;k++)
                {
                    var z = product[i][k];
                    text+="<td>" + z + "</td>";
                }
                text += "</tr>";
            }
        }
    }
    text+="</table>";
    document.getElementById("result").innerHTML=text;
}   

      var drop1 = document.getElementById("dropbox1").value;
      var drop2 = document.getElementById("dropbox2").value;

      console.log(drop1);
      console.log(drop2);


function sorting()
{   
    var drop1 = document.getElementById("dropbox1").value;
    var drop2 = document.getElementById("dropbox2").value;
    
    console.log(drop1);
    console.log(drop2);

    
    product.sort(sortFunction);
    var device ="<table><tr><th>Company</th><th><Model></th><th>Memory</th><th>Price</th></tr>";
    function sortFunction(a,b)
     {
          if(a[drop2] == b[drop2])
          { 
            
            return 0;
          }
          else
          {
        
            if(drop1==0)
            { 
                return (a[drop2]>b[drop2]) ? 1 : -1;
               
            }
            else
            {
                return (a[drop2]>b[drop2]) ? -1 : 1;
                
            }
           
          }
     }
     displayTable();
     function displayTable()
     {
     var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";
     for (let i=0 ; i<=4 ;i++)
     {
       txt+="<tr>";
       for (let j=0 ;j<=3 ;j++)
       {
          var x = product[i][j];
        
          txt+="<td>"+x+"</td>";
       }  
       txt+="</tr>";
     }
     txt+="</table>";
//alert(text);
//document.write("Hello");
     document.getElementById("sortingproduct").innerHTML=txt;
    }
   }
