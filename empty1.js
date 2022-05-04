function f1(){
var arr=[["samsung",Z+,900],["nokia",G64,1000],["xiaomi",s24,2000],["apple",A+,564],["motorola",m45,4000]];

// var temp=['xiaomi','motorola','samsung'];
var temp=['xiaomi','motorola'];
for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<temp.length;j++)
    {
        if(arr[i][0]==temp[j])
        {
            arr.splice(i,1);
        
        }
    }
}
document.getElementById("print").innerHTML=arr;
}


