$(document).ready(function() {
  $('.parallax').parallax();
  // $('#landImage').particleground({
  //   dotColor: '#5cbdaa',
  //   lineColor: '#5cbdaa',
  //   density: 25000
  // });

  $('#land').Geometryangle({mesh:{
    ambient:'rgba(0,10,0, 1)', // (,hover intensity,,)
    diffuse: "rgba(192,192,192,1)"
    // background: "rgba(0,0,0)"
  }, lights: [{
    ambient: "rgba(192,10,192,0.1)", // (,hover intensity,,)
    diffuse: "rgba(192,170,192,1)"
  }], line: {}, vertex: {
    // strokeColor: 	"rgba(0,0,0)"
  }});

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
  // $('#section2').particleground({
  //   dotColor: '#5cbdaa',
  //   lineColor: '#5cbdaa',
  //   density: 25000
  // });
});