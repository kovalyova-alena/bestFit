$(document).ready(function (e){

    openMenuOnHover();

    $('.navbar-toggle').on('click', function () {
        $('.navbar').toggleClass('nav-opened');
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
