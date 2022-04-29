const product = [
    ['Samsung' , 'Galaxy' , 64 , 1500],
    ['nokia' , 'S730' ,128, 22000],
    ['xiaomi' , 'note' , 32 , 12000],
    ['motorola' , 'g10', 32 , 14000],
    ['apple' , 's12' , 64 , 18000]
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

