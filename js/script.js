$(document).ready(function() {
  $(".menu_bar").click(function() {
    $(".nav_links").slideToggle();
    $(this).find('.ti').toggleClass("ti-x");
  });
});
