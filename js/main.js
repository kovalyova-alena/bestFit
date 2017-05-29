$(document).ready(function (e){
    

      $('.nav').on('mouseover', '.item-menu', function (){
          $('.nav>li>a:focus').blur();
          $(this).addClass('open');
      });

    $('.nav').on('mouseout', '.item-menu', function (){
        $(this).removeClass('open');
    });


});