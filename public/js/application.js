$(document).ready(function() {
   
   function getAwesome(){
     $('h2#awesomeness_holder').empty();
     data = $(this).data('heading');
     $('h2#awesomeness_holder').append(data);
   }
   function getSkill(){
     $('h2#skill_holder').empty();
     skill = window.location.pathname.split('/')[2]
     $('h2#skill_holder').append(skill);
   }
   function getMeal(){
     $('h2#meal_holder').empty();
     randomFood = foodArray[Math.floor(Math.random()*foodArray.length)]
     $('h2#meal_holder').append(randomFood);
   }
  function bindEvents(){
    $('.awesomeness_teller').on('click', getAwesome)
    $('.skill_teller').on('click', getSkill)
    $('.meal_teller').on('click', getMeal)
  }
  bindEvents();
});
