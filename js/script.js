$(document).ready(function () {
  $(".menu_bar").click(function () {
    $(".nav_links").slideToggle();
    $(this).find('.ti').toggleClass("ti-x");
  });

  var swiper = new Swiper(".cate_silde_main", {
    loop: true,
    slidesPerView: "auto",
   centeredSlides: true,
    speed: 500,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 30
    //   },
    //   1024: {
    //     slidesPerView: 6,
    //     spaceBetween: 30
    //   }
  
    // }
   
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
  
});

