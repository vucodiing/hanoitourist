$(document).ready(function() {
    /* banner slide */
    $('.banner__slide').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<img src="./images/icon/left.svg">', '<img src="./images/icon/right.svg">'],
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 500

    })


    /* my-service slide */

    $('.my-service__list').owlCarousel({
        margin: 10,
        dots: false,
        navText: ['<img src="./images/icon/left.svg">', '<img src="./images/icon/right.svg">'],
        autoplayTimeout: 4000,
        autoplaySpeed: 500,
        responsive: {
            0: {
                items: 1,
                loop: true,
                nav: true,
                autoplay: true,
                mouseDrag: true
            },
            600: {
                items: 2,
                loop: true,
                nav: true,
                autoplay: true,
                mouseDrag: true
            },
            1000: {
                items: 4,
                loop: false,
                nav: false,
                mouseDrag: false
            }
        }

    })

    /* featured-post  slide */
    $('.featured-slide').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,

        responsive: [{
                breakpoint: 2560,
                settings: {
                    slidesToShow: 10,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },

            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }

        ]

    });


    /* handbook slide */
    $('.handbook__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.handbook__bottom'
    });
    $('.handbook__bottom').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.handbook__top',
        dots: true,
        focusOnSelect: true
    });


    /* video-box__slide */

    $('.video-box__slide').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 2560,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]

    });


    /* widget-img */
    $('.widget-img').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    /* customer__slide  */

    $('.customer__slide ').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 2560,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            },
            {
                breakpoint: 319,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]

    });

})