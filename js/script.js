$(document).ready(function() {
  $(".menu_bar").click(function() {
    $(".nav_links").slideToggle();
    $(".ti").toggleClass("ti-x");
  });
});
