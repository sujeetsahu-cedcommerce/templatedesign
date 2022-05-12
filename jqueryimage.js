// $("#prev").click(function(){
//   $("img").attr("src" ,"");
// });


$(".buttons").on('click','#prev',function() {
  // Change src attribute of image
  $("img").attr("src", "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg");
});

$(".buttons").on('click', '#next',function() {
  // Change src attribute of image
  $("img").attr("src", "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80");
});