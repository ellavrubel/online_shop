    $(function () {

        // slider-1

        $('.banner-section__slider').slick({

            dots: true,
            infinite: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnLeft"><img src="img/arrow-left.svg" alt=""></button>',
            nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnRight"><img src="img/arrow-right.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 968,
                    settings: {
                        arrows: false
                    }
                }
            ]

        });


    //    tabs - main page

        $('.tab').on('click', function(e) {
            e.preventDefault();

            $($(this).siblings()).removeClass('tab--active');
            $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

            $(this).addClass('tab--active');
            $($(this).attr('href')).addClass('tabs-content--active');

        //    initialization of a slider

            $('.products-slider, .banner-section__slider').slick('setPosition');

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
            nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnRight products-right-grey"><img src="img/arrow-right-grey.svg" alt=""></button>',
            responsive: [
                {
                    breakpoint: 1301,
                    settings: {
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 1201,
                    settings: {
                        slidesToShow: 3,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 880,
                    settings: {
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 590,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]

        });



    //    checkboxes

        $('.filter-style').styler();


        $('.filter__item-drop, .filter-extra, .info-title, .item3-title').on('click', function() {

            $(this).toggleClass('filter__item-drop--active');

            $(this).next().slideToggle(400);

        });



    //    RangeSlider

        $(".js-range-slider").ionRangeSlider({

            type: "double",
            skin: "round"

        });


    //    Buttons Grid/Line

        $('.catalog__filter-button').on('click', function () {

            $($(this).siblings()).removeClass('catalog__filter-button--active');

            $(this).addClass('catalog__filter-button--active');
        });


    //    Switching between grid/line

        $('.catalog__filter-btnLine').on('click', function () {

            $('.products__item-wrapper').addClass('products__item-wrapper--line');
        });

        $('.catalog__filter-btnGrid').on('click', function () {

            $('.products__item-wrapper').removeClass('products__item-wrapper--line');
        });


    //    RateYo

        $(".rate-yo").rateYo({
            normalFill: "#C4C4C4",
            starWidth: "23px",
            spacing: "7px"
        });


    //    Menu - gamburger

        $('.menu__btn').on('click', function () {

            $('.menu-mobile__list').toggleClass('menu-mobile__list--active');

        });


    //    Catalog-page Filter button

        $('.aside__btn').on('click', function(){

            $(this).next().slideToggle(1000);

        });

    //    Product page showShops

        $('.product-details__showShops').on('click', function(){

            $(this).nextAll().slideToggle(800);
            $('.product-details__showShops-img').toggleClass('product-details__showShops-img--active');

        });








    });