$(document).ready(function (e){

  $('.nav').on('mouseover', 'li', function (){
      $(this).addClass('open');
  });

    $('.nav').on('mouseout', 'li', function (){
        $(this).removeClass('open');
    });


});