var product = [

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

 

// Add a dropdown and a textbox with search button to search and display the product according to the attachment.

function mysearch()

{

    var select = document.getElementById("selectitem").value;

    var search = document.getElementById("searchitem").value;

    var text="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";

    console.log(select);

    console.log(search);

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

 

// Add two dropdowns to sort and display a product based on the fields a product have as given in the attachment.

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

 

    //  Take the details of a new product from the user as shown in the attachment and add it to the array after the second product. Use proper validations if required.

    function adddetails()

    {

        var arr=[];

        arr[0]=document.getElementById("Company_value").value;

        arr[1]=document.getElementById("Model_value").value;

        arr[2]=document.getElementById("Memory_value").value;

        arr[3]=document.getElementById("Price_value").value;

        console.log(arr);

        var i;

        for(i=product.length;i>=3;i--)

        {

           product[i]=product[i-1];

        }

        product[i]=arr;

        console.log(product);

        var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>";

        for (let i=0 ; i<=product.length-1 ;i++)

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

       document.getElementById("showDetails").innerHTML=txt;

    }

 

 // Select product(s) from the list and their quantity and add them to a array then generate a billing invoice according to the attachment.

        TotalAmount=0;

        doublearray=[];

        function add()

        {

         var Products=document.getElementById("selectproduct").value;

        //  console.log(Products);

         var quantity=document.getElementById("selectquantity").value;

        //  console.log(quantity);

         if(Products=="Samsung Galaxy")

          {

              Amount=15000*quantity;

          }

         else if(Products=="Motorola G10")

          {

              Amount=5000*quantity;

          }

         else if(Products=="Nokia S730")

          {

              Amount=10000*quantity;

          }

         else if(Products=="Xiaomi Note")

          {

              Amount=20000*quantity;

          }

         else if(Products=="Apple S12")

          {

              Amount=25000*quantity;

          }

        //  console.log(Amount);

         var store=[];

         store[0]=Products;

         store[1]=quantity;

         store[2]=Amount;

        //  console.log(store);

        //  var doublearray=[];

         var len=doublearray.length;

         console.log(len);

         doublearray[len]=store;

        // doublearray.push(store);

           console.log(doublearray);

           TotalAmount+=Amount;

           console.log(TotalAmount);

        //    bill();

        }

        function bill()

          {

              console.log(TotalAmount);

              var txt="<table><tr><th>Bill</th></tr><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";

              for(let i=0;i<doublearray.length;i++)

              {

                txt+="<tr>";

                  for(let j=0;j<=2;j++)

                   txt+="<td>" + " " + doublearray[i][j]+"</td>";

                   txt+="</tr>";

              }

              txt+="<tr><td>Total</td><td></td><td>" +TotalAmount+ "</td></table>";

              document.getElementById("divbilling").innerHTML=txt;

          }

     

//   Add a checkbox with every product. User can select one or more products to delete from the list and display the remaining products after deletion.

var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Action</th></tr>";

for (let i=0 ; i<product.length ;i++)

{

    txt+="<tr>";

    for (let j=0 ;j<=3 ;j++)

    {

        var x = product[i][j];

        txt+="<td>"+x+"</td>";

    }  

    txt+="<td><input type='checkbox' class='deletion' id='"+product[i][0]+"' value='"+product[i][0]+"'></td>";

    txt+="</tr>";

}

txt+="</table>";

document.getElementById("checkdelete").innerHTML=txt;

function del()

{

var values=[];

for(var i=0;i<product.length;i++){

  var chk=document.getElementById(product[i][0]).checked;    

  if(chk==true){

      values.push(product[i][0]);

  }

}

 console.log("values",values);

 for(let j=0;j<values.length;j++)

{

    for(let i=0;i<product.length;i++)

    {

        if(product[i][0]==values[j])

        {

            product.splice(i,1);

        }

    }

}

var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Action</th></tr>";

for (let i=0 ; i<product.length ;i++)

{

    txt+="<tr>";

    for (let j=0 ;j<=3 ;j++)

    {

        var x = product[i][j];

        txt+="<td>"+x+"</td>";

    }  

    txt+="<td><input type='checkbox' class='deletion' id='"+product[i][0]+"' value='"+product[i][0]+"'></td>";

    txt+="</tr>";

}

txt+="</table>";

document.getElementById("checkdelete").innerHTML=txt;

 console.log("product",product);

}

 

// Customer should be able to mark the rating for a product that should be visible in the rating column.

    var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Rate</th></tr>"

    for(let i=0;i<product.length;i++) {

        txt+="<tr>"

        for(let j=0;j<=3;j++)

        {

            txt+="<td>"+ product[i][j] +"</td>";

        }

        txt+="</tr>";

    }

    txt+="</table>";

    document.getElementById("divrating").innerHTML=txt;

    function rate(){

        selProduct=document.getElementById("productSelect").value;

        selRate=document.getElementById("ratingSelect").value;

        product[selProduct][4]=selRate;

        console.log(product);

        var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Rate</th></tr>"

        for(let i=0;i<product.length;i++)

        {

          txt+="<tr>"

          for(let j=0;j<=4;j++)

          {

              txt+="<td>"+ product[i][j] +"</td>";

          }

          txt+="</tr>";

        }

        txt+="</table>";

        document.getElementById("divrating").innerHTML=txt;

    }

// Add one more column for quantity available for each of the product. It will be updated when a product is added to cart.

var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>"

for(let i=0;i<product.length;i++)

{

    txt+="<tr>"

    for(let j=0;j<=4;j++)

    {

        if(j==4)

        {

            product[i][j]=20;

        }

        txt+="<td>"+ product[i][j] +"</td>";

    }

    txt+="</tr>";

}

txt+="</table>";

document.getElementById("divQuantity").innerHTML=txt;

function Cart(){

    selected_Item=document.getElementById("itemSelect").value;

    selected_Quan=document.getElementById("addCart").value;

    Remaining_Quan=product[selected_Item][4]-selected_Quan;

    console.log(selected_Item);

    console.log(selected_Quan);

    console.log(Remaining_Quan);

     // if(selected_Quan>product[selected_Item][4])

    // {

       

    //     confirm("sorry you can purchase only "+ product[selected_Item][4] +" product");

    // }

   if(Remaining_Quan<0)

    {

        let x="Sorry product is out of Stock";

        alert(x);

    }

    var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>"

   for(let i=0;i<product.length;i++)

   {

     txt+="<tr>"

     for(let j=0;j<=4;j++)

     {

        if(i==selected_Item && j==4 && Remaining_Quan>=0)

        {

            product[i][j]=Remaining_Quan;

        }

        txt+="<td>"+ product[i][j] +"</td>";

     }

    txt+="</tr>";

   }

   txt+="</table>";

   document.getElementById("divQuantity").innerHTML=txt;

}

doublearray=[];

function total(){

    TotalAmount=0;

    add();

    function add(){

        var Amount=0;

        var Products=product[document.getElementById("itemSelect").value][0];

        console.log(Products);

        var quantity=document.getElementById("addCart").value;

        console.log(quantity);

        if(Products=="Samsung")

        {

          Amount=15000*quantity;

        }

        else if(Products=="Motorola")

        {

          Amount=5000*quantity;

        }

        else if(Products=="Nokia")

        {

          Amount=10000*quantity;

        }

        else if(Products=="Xiaomi")

        {

          Amount=20000*quantity;

        }

        else if(Products=="Apple")

        {

          Amount=25000*quantity;

        }

//  console.log(Amount);

       var store=[];

       store[0]=Products;

       store[1]=quantity;

       store[2]=Amount;

//  console.log(store);

//  var doublearray=[];

       var len=doublearray.length;

       console.log(len);

       doublearray[len]=store;

// doublearray.push(store);

       console.log("doublearray",doublearray);

       TotalAmount+=Amount;

       console.log(TotalAmount);

    }

    bill();

    function bill(){

         console.log(TotalAmount);

         var txt="<table><tr><th>Bill</th></tr><tr><th>Description</th><th>Quantity</th><th>Amount</th></tr>";

         for(let i=0;i<doublearray.length;i++)

         {

             txt+="<tr>";

             for(let j=0;j<=2;j++){

                 txt+="<td>" + " " + doublearray[i][j]+"</td>";

             }

             txt+="</tr>";

         }

         txt+="<tr><td>Total</td><td></td><td>" +TotalAmount+ "</td></table>";

         document.getElementById("generate").innerHTML=txt;

    }

}

// Inventory manager should be able to update the quantity of a products. Display the updated quantity.

function Update(){

    var Dev=document.getElementById("selectDevices").value;

    var Qn=document.getElementById("addQuantity").value;

    console.log(Dev);

    console.log(Qn);

    product[Dev][4]=Qn;

    console.log(product[Dev][4]);

    repeatative();

    function repeatative(){

        var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th><th>Quantity</th></tr>"

        for(let i=0;i<product.length;i++){

            txt+="<tr>"

            for(let j=0;j<=4;j++){

                txt+="<td>"+ product[i][j] +"</td>";

            }

            txt+="</tr>";

        }

        txt+="</table>";

        document.getElementById("divQuantity").innerHTML=txt;

    }

}

// Filter and display the products with in a given price range.    

function productSearch(){

    var min=document.getElementById("minimum").value;

    var max=document.getElementById("maximum").value;

    var txt="<table><tr><th>Company</th><th>Model</th><th>Memory</th><th>Price</th></tr>"

    for(let i=0;i<product.length;i++){

        for(let j=3;j<=3;j++){

            if(product[i][j]>=min && product[i][j]<=max)

            {

                txt += "<tr>";

                for( let k=0;k<=3;k++)

                {

                    var z = product[i][k];

                    txt+="<td>" + z + "</td>";

                }

                txt += "</tr>";

            }

        }

    }

   txt+="</table>";

   document.getElementById("SearchedItem").innerHTML=txt;

}

