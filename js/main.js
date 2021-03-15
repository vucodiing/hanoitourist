$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();

    /* date picker - home-search */
    $(function() {

        $('input[name="departure"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('input[name="departure"]').on('apply.daterangepicker', function(ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('input[name="departure"]').on('cancel.daterangepicker', function(ev, picker) {
            $(this).val('');
        });

    });
    /* fixed menu */
    $(window).scroll(function() {
        var hight_top = $(".header__top").height();


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