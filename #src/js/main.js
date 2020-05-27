"use strict";
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $('[data-show="catalog"').on('click', function() {
    $('.catalog__title_open').css('display', 'none')
    $('.catalog__title_close').css('display', 'block')
    // $('.catalog-list').css('display', 'flex')
  })
  
  $('[data-hide="catalog"').on('click', function() {
    $('.catalog__title_open').css('display', 'block')
    $('.catalog__title_close').css('display', 'none')
    // $('.catalog-list').css('display', 'none')
  })
  $('.catalog__title').on('click', function() {
    $('.catalog-box').toggleClass('catalog-box_active')
  })
  $(window).scroll(function () {
    let menuHeight = $('.menu').height();
    let heightHtml = $(document).outerHeight();
    let w = $(window).width();
    // let h = $(window).height();
    console.log(heightHtml);
    if (heightHtml >= 1250) {
        if ($(this).scrollTop() > 400) {
          $('.menu').addClass('menu_fixed');
          $('.catalog-box').addClass('catalog-box_fixed');
          $('.catalog-box').css('top', menuHeight);
      } else {
        $('.menu').removeClass('menu_fixed');
        $('.catalog-box').removeClass('catalog-box_fixed');
        $('.catalog-box').css('top', 'unset');
      }

      
      if (w <= 700) {
        if ($(this).scrollTop() > 400) {
          $('.catalog-box').css('top', menuHeight + 20);
        } else {
          $('.catalog-box').css('top', 'unset');
        }
      }
    } else {
      return false;
    }
});
});