$(document).ready(function (e){

    //Menu onHover
    openMenuOnHover();
    bx();

    //bxSlider
    $('.bxslider').bxSlider({
        mode: 'fade',
        touchEnabled: true,
        oneToOneTouch: true,
        controls: false,
    });


    //FancyBox
    $("[data-fancybox]").fancybox({
        loop : true,
        infobar : false,
        thumbs : false,
        image : {
            protect: true
        },
        zoomIn : false

    });

    
    $('.navbar-toggle').on('click', function () {
        $('body').toggleClass('nav-opened');
    });

    $(window).resize(function(){
            openMenuOnHover();
            bx();
    });

    function bx() {
        var windowW = $(window).width();
        var quantity;
        quantity = (windowW < 768) ? 2 : 5;
        console.log(quantity);
        $('.sliderCarousel').bxSlider({
            slideWidth: windowW,
            minSlides: quantity,
            maxSlides: 5,
            moveSlides: 1,
            slideMargin: 0
        });
    }


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
