$(function(){$(".banner-section__slider").slick({dots:!0,infinite:!0,fade:!0,cssEase:"linear",prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnLeft"><img src="img/arrow-left.svg" alt=""></button>',nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnRight"><img src="img/arrow-right.svg" alt=""></button>',responsive:[{breakpoint:968,settings:{arrows:!1}}]}),$(".tab").on("click",function(t){t.preventDefault(),$($(this).siblings()).removeClass("tab--active"),$($(this).closest(".tabs-wrapper").siblings().find("div")).removeClass("tabs-content--active"),$(this).addClass("tab--active"),$($(this).attr("href")).addClass("tabs-content--active"),$(".products-slider,.banner-section__slider").slick("setPosition")}),$(".products__item-favorite").on("click",function(){$(this).toggleClass("products__item-favorite--active")}),$(".products-slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnLeft products-left-grey"><img src="img/arrow-left-grey.svg" alt=""></button>',nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnRight products-right-grey"><img src="img/arrow-right-grey.svg" alt=""></button>',responsive:[{breakpoint:1301,settings:{arrows:!1,dots:!0}},{breakpoint:1201,settings:{slidesToShow:3,arrows:!1,dots:!0}},{breakpoint:880,settings:{slidesToShow:2,arrows:!1,dots:!0}},{breakpoint:590,settings:{slidesToShow:1,arrows:!1,dots:!0}}]}),$(".filter-style").styler(),$(".filter__item-drop, .filter-extra, .info-title, .item3-title").on("click",function(){$(this).toggleClass("filter__item-drop--active"),$(this).next().slideToggle(400)}),$(".js-range-slider").ionRangeSlider({type:"double",skin:"round"}),$(".catalog__filter-button").on("click",function(){$($(this).siblings()).removeClass("catalog__filter-button--active"),$(this).addClass("catalog__filter-button--active")}),$(".catalog__filter-btnLine").on("click",function(){$(".products__item-wrapper").addClass("products__item-wrapper--line")}),$(".catalog__filter-btnGrid").on("click",function(){$(".products__item-wrapper").removeClass("products__item-wrapper--line")}),$(".rate-yo").rateYo({normalFill:"#C4C4C4",starWidth:"23px",spacing:"7px"}),$(".menu__btn").on("click",function(){$(".menu-mobile__list").toggleClass("menu-mobile__list--active")}),$(".aside__btn").on("click",function(){$(this).next().slideToggle(1e3)}),$(".product-details__showShops").on("click",function(){$(this).nextAll().slideToggle(800),$(".product-details__showShops-img").toggleClass("product-details__showShops-img--active")})});