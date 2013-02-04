jQuery.fn.slolder = function(options){

  defaults = {
    interval: 5000,
    transitionTime: 1000
  }
  options = $.extend(defaults, options);

  // Variable setting
  var self = this;
  var container = $(this);
  var slides = container.children();
  var defaultSlideStyle = {
    "display": "none",
    "height": "100%",
    "left": "0",
    "margin": "0",
    "opacity": "1",
    "position": "absolute",
    "top": "0",
    "width": "100%",
    "z-index": "-1"
  }

  // CSS styling
  container.css("position", "relative");
  if( container.css("height") === "0px" ){
    container.css("height", "100%");
  }
  if( container.css("width") === "0px" ){
    container.css("width", "100%");
  }
  slides.css(defaultSlideStyle);

  // Default transition function
  self.defaultTransitionFunction = function(slide) {
    return slide.fadeOut(options.transitionTime);
  }

  // Setting transition function
  self.transitionFunction = (function() {
    switch (typeof options.transitionFunction) {

      // if it is a custom function received by the user, use it
      case "function":
        return options.transitionFunction;

      // if it is a string, verify if it is valid on and set it as required
      case "string":
        switch (options.transitionFunction) {
          case "fadeOut":
            return self.defaultTransitionFunction;
          case "slideUp":
            return function(slide) {
              return slide.slideUp(options.transitionTime);
            }
          default:
            throw "There is no transitionFunction named '" + options.transitionFunction + "'. \n Try using a custom function instead.";
        }
        break;

      // if it is undefined or invalid type, use defaultTransitionFunction
      default:
        return self.defaultTransitionFunction;
    }
  })();

  // Turning the Sloldering on
  slides.last().fadeIn(options.transitionTime, function(){
    slides.show();

    // Start the engines: loop!
    setInterval(function(){
      // calls chosen or default transition function
      self.transitionFunction(slides.last()).promise().done(function(){
        // after transitionFunction is done, call reorganize slides
        slides.last().insertBefore(slides.first()).css(defaultSlideStyle).show();
        slides = container.children();
      });
    }, options.interval);

  });

  // returns the receiver jquery object
  return this;
}
