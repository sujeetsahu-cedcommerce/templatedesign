// $(".parent-div").on("click","button",function()
// {
//     new_line = $(this).attr('class');
//     if(new_line == 'parent-button') {
//         $('.parent-ul').append('<li><a href="#">Category</a><button class="parent-button">+</button></li>');
//       }
//     else if(new_line == 'child-button') {
//         $('.child-ul').append('<li><a href="#">Sub-Category</a><button class="child-button">+</button></li>');
//      }
// });

$(document).ready(function(){
  $(".parent-div").on("click","button",function()
      {
      new_line = $(this).attr('class');
      if(new_line == 'parent-button'){
      $('.parent-ul').append('<li><a href="#">Category</a><button class="parent-button">+</button></li>');
      }
      else if(new_line == 'child-button'){
      $('.child-ul').append('<li><a href="#">Sub-Category</a><button class="child-button">+</button></li>');
      }
      else if(new_line =='pbutton'){
          $('.ul-parent').append('<li><a href="#">Category</a><button class="parent-button">+</button></li>');
      }
      else{
          $('.ul-child').append("<li><a href='#'>Sub-Category</a><button class='cbutton'>+</button></li>");
      }
      });
});

