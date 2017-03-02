
$(document).ready(function() {
      $('.nav').click(function() {
        var id = $(this.getAttribute('id');
        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#"+id+".div").offset().top
        },'1000');
      )};
    )};
