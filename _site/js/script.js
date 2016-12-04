$(document).ready(function() {
  $('.parallax').parallax();
  $('#landImage').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa',
    density: 20000
  });
  $(".button-collapse").sideNav();
  $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("slow");
                $(this).toggleClass('open');
                // $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("slow");
                $(this).toggleClass('open');
                // $('b', this).toggleClass("caret caret-up");                
            });


});