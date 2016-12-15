$(document).ready(function() {

  if(screen.width < 768){
    $(".navbar-fixed").removeClass("navbar-fixed");
  } else{
    $(".add-navbar").addClass("navbar-fixed");
  }

  $('.parallax').parallax();
  // $('#landImage').particleground({
  //   dotColor: '#5cbdaa',
  //   lineColor: '#5cbdaa',
  //   density: 25000
  // });

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
  $('#land').Geometryangle({mesh:{
    ambient:'rgba(0,0,0,0.5)', // (,hover intensity,,)
    diffuse: "rgba(192,192,190,0.1)",
    background: "rgba(0,0,0,1)",
    depth: 0.1,
    speed: 0.0003

  }, lights: [{
    // ambient: "rgba(0,0,0,1)", // (,hover intensity,,)
    diffuse: "rgba(192,192,192,0.4)",
    speed: 0.05,
    gravity: 800,
    zOffset: 60,
    dampening: 0.1
  }], line: {}, vertex: {}});

  var controller = $.superscrollorama();
  // controller.addTween('#dexerImage', TweenMax.from( $('#dexerImage'), .5, {css:{opacity:0, rotation: 720}, ease:Quad.easeOut}));

});