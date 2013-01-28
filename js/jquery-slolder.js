jQuery.fn.slolder = function(options){
  if(options === undefined){ options = {} }
  var slides = $(this).children();
  var interval = options.interval || 5000;
  var transitionTime = options.transitionTime || 1000;
  if (transitionTime >= interval) {
    transitionTime = interval * 0.9;
  }

  // CSS styling
  $(this).css("position", "relative");
  if( $(this).css("height") === "0px" ){
    $(this).css("height", "100%");
  }
  if( $(this).css("width") === "0px" ){
    $(this).css("width", "100%");
  }
  slides.css({
    "display": "block",
    "height": "100%",
    "left": "0",
    "position": "absolute",
    "top": "0",
    "width": "100%",
    "z-index": "-1"
  });

  // Slolding
  slides.last().fadeIn(transitionTime, function(){
    slides.show();

    setInterval(function(){
      slides.last().fadeOut(transitionTime, function(){
        slides.first().before($(this));
        $(this).show();

        // reordering slides array
        var _i, _j, _len;
        for ( _i = 0, _len = slides.length; _i <= _len; _i++ ) {
          _j = _len - _i;

          if(_j > 0) {
            slides[_j] = slides[_j - 1];
          } else {
            slides[0] = slides[_len];
            slides.splice(_len);
          }
        }

      });
    }, interval);
  });
  return this;
}