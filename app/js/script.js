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

        $('.tab').on('click', function(e) {
                e.preventDefault();

                $('.tab').removeClass('tab--active');
                $('.tabs-content').removeClass('tabs-content--active');

                $(this).addClass('tab--active');
                $($(this).attr('href')).addClass('tabs-content--active');


        });






    });