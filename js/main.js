$(document).ready(function (e){

    //Menu onHover
    openMenuOnHover();

    //bxSlider
    $('.bxslider').bxSlider({
        mode: 'fade',
        autoControls: true,
        controls: false,
        autoHover: true
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
