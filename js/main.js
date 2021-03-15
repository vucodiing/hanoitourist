$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    /* fixed menu */
    $(window).scroll(function() {
        var hight_top = $(".header__top").height();
        console.log($(window).scrollTop());

        if ($(window).scrollTop() > (hight_top + 15) && $(window).width() > 991) {
            $(".header__bottom").addClass("sticky");
        } else {
            $(".header__bottom").removeClass("sticky");
        }
    });


    /* toggle menu-mobile */

    $(".toogle-menu").click(function(e) {
        $(".header__bottom").toggleClass("active");
        $(".overlay-menu ").toggleClass("active");

    });
});