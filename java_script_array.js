const product = [
    ['Samsung' , 'Galaxy' , 64 , 1500],
    ['nokia' , 'S730' ,128, 22000],
    ['xiaomi' , 'Note' , 32 , 12000],
    ['motorola' , 'G10', 32 , 14000],
    ['apple' , 'S12' , 64 , 18000]
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
    var search = document.getElementById("searchitem").value;

      console.log(select);
      console.log(search);
  
     
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



