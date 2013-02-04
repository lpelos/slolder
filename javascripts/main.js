jQuery(function($){

  $(".slolder").first().slolder({
    interval: 3000,
    transitionTime: 800
  });

  $(".slolder.fade-out").slolder({
    interval: 3000,
    transitionTime: 800,
    transitionFunction: "fadeOut"
  });

  $(".slolder.slide-up").slolder({
    interval: 3000,
    transitionTime: 800,
    transitionFunction: "slideUp"
  });

  $(".slolder.custom-function").slolder({
    interval: 3000,
    transitionFunction: function(slide){
      return slide.animate({
        height: "0",
        opacity: "0",
        width: "0"
      }, 500)
    }
  });

});