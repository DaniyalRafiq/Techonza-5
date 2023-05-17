
$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".nav_links").slideToggle();
    $(this).find('.ti').toggleClass("ti-x");
  });
  $(".ti-caret-down").click(function () {
    $(".cate_bottom").slideToggle();
    $(this).toggleClass("ti-caret-down").toggleClass('ti-caret-up')
  })
});

var swiper = new Swiper(".cate_silde_main", {
  loop: true,
  slidesPerView: "auto",
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

$(window).scroll(function(event) {
  let $headerHeight = $('header').height();
  if ($(document).scrollTop() > $headerHeight) {
     $('header').addClass("sticky");
  } else if ($(document).scrollTop() < 0.1) {
     $('header').removeClass("sticky")
  }
});

var swiper = new Swiper(".store_swiper", {
  slidesPerView: "auto",
  grid: {
    rows: 2,
  },
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  
});
  // $(document).ready(function() {
  //   $("input").click(function() {
  //     $(this).css("border", "2px solid red");
  //   });
  // });