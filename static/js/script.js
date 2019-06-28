jQuery(document).ready(function ($) {
    $('.main-carousel').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        arrows: true,
        speed: 1000
    });
    $('.product-carousel').slick({
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        centerPadding: '30px',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 790,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
          ]
    });
    $('.search a').click(function (e) {
        e.preventDefault();
        $('.search-form').fadeToggle(100);
    });
    $('.mobile-menu-button').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('opened');
        $('.menu').slideToggle(300);
    });
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
        $('.menu li').removeClass('active');
        $(this).parent().addClass('active');
    });
    $(window).scroll(function () {
        var Scroll = $(window).scrollTop() + 200,
            SectionhomeOffset = $('#home').offset().top,
            SectionOneOffset = $('#about').offset().top,
            SectionTwoOffset = $('#products').offset().top,
            SectionThreeOffset = $('#skin-care').offset().top,
            SectionfourOffset = $('#subscribe').offset().top,
            SectionfiveOffset = $('#contact').offset().top;
        if (Scroll >= SectionhomeOffset) {
            $('.menu li').removeClass('active');
            $("#home-link").parent('li').addClass("active");
        } else {
            $("#home-link").parent('li').removeClass("active");
        }
        if (Scroll >= SectionOneOffset) {
            $('.menu li').removeClass('active');
            $("#about-link").parent('li').addClass("active");
        } else {
            $("#about-link").parent('li').removeClass("active");
        }
        if (Scroll >= SectionTwoOffset) {
            $('.menu li').removeClass('active');
            $("#products-link").parent('li').addClass("active");
        } else {
            $("#products-link").parent('li').removeClass("active");
        }
        if (Scroll >= SectionThreeOffset) {
            $('.menu li').removeClass('active');
            $("#skin-care-link").parent('li').addClass("active");
        } else {
            $("#skin-care-link").parent('li').removeClass("active");
        }
        if (Scroll >= SectionfourOffset) {
            $('.menu li').removeClass('active');
            $("#subscribe-link").parent('li').addClass("active");
        } else {
            $("#subscribe-link").parent('li').removeClass("active");
        }
        if (Scroll >= SectionfiveOffset) {
            $('.menu li').removeClass('active');
            $("#contact-link").parent('li').addClass("active");
        } else {
            $("#contact-link").parent('li').removeClass("active");
        }
    });
});

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".header-bottom").addClass("fixed");
    } else {
        $(".header-bottom").removeClass("fixed");
    }
});