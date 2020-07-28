    $(function () {

        // slider-1

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

                $($(this).siblings()).removeClass('tab--active');
                $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

                $(this).addClass('tab--active');
                $($(this).attr('href')).addClass('tabs-content--active');


        });


    //    favorite-icons

        $('.products__item-favorite').on('click', function () {

            $(this).toggleClass('products__item-favorite--active');

        });


    //    slider-2

        $('.products-slider').slick({

            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1, prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnLeft products-left-grey"><img src="img/arrow-left-grey.svg" alt=""></button>',
            nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnRight products-right-grey"><img src="img/arrow-right-grey.svg" alt=""></button>'

        });



    //    checkboxes

        $('.filter-style').styler();


        $('.filter__item-drop ').on('click', function() {

            $(this).toggleClass('filter__item-drop--active');

            $(this).next().slideToggle(400);

        });



    //    RangeSlider

        $(".js-range-slider").ionRangeSlider({

            type: "double",
            skin: "round"

        });






    });