    $(function () {

        $('.banner-section__slider').slick({

            dots: true,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnLeft"><img src="img/arrow-left.svg" alt=""></button>',
            nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnRight"><img src="img/arrow-right.svg" alt=""></button>'

        });


    //    tabs - main page

        $('.search__tabs-item').on('click', function(e) {
                e.preventDefault();

                $('.search__tabs-item').removeClass('search__tabs-item--active');
                $('.search__content-item').removeClass('search__content-item--active');

                $(this).addClass('search__tabs-item--active');
                $($(this).attr('href')).addClass('search__content-item--active');


        });






    });