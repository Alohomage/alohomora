(function($) {

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if($("#mainNav").length) {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  });


})(jQuery); // End of use strict
