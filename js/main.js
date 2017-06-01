$(document).ready(function (e){

    //Menu onHover
    openMenuOnHover();

    //bxSlider
    $('.bxslider').bxSlider({
        mode: 'fade',
        touchEnabled: true,
        oneToOneTouch: true,
        controls: false,
    });



    $('.navbar-toggle').on('click', function () {
        $('body').toggleClass('nav-opened');
    });

    $(window).resize(function(){
            openMenuOnHover();
    });

    function openMenuOnHover() {
        if ($(window).width() > 767) {
            $('.nav').on('mouseenter', '.item-menu', function (){
                $('.nav>li>a:focus').blur();
                $(this).addClass('open');
            });

            $('.nav').on('mouseleave', '.item-menu', function (){
                $(this).removeClass('open');
            });
        }
    }
});

$(window).scroll(function()  {
     ($('body').scrollTop() !== 0) ? $('header').css('box-shadow', '0 0 20px rgba(0,0,0,0.6)') : $('header').css('box-shadow', 'none');

});
