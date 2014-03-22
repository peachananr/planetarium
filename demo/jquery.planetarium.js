/* ===========================================================
 * jquery-planetarium.js v1.0
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Construct a planet like gods with jQuery
 * Planetarium plugin
 *
 * https://github.com/peachananr/planetarium
 * 
 * License: GPL v3
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    autospin: "1000ms",
    angle: "20deg",
    glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
    pattern: "img/texture-earth.jpg",
    size: "100x100",
    float: true,
    space: "body",
    ring: false,
    ringColor: "#fff",
    ringAngle: "20deg"
  };
  
  // Function to convert mouse to touch events
  function touchHandler(event)
  {
      var touches = event.changedTouches,
          first = touches[0],
          type = "";

           switch(event.type)
      {
          case "touchstart": type = "mousedown"; break;
          case "touchmove":  type="mousemove"; break;        
          case "touchend":   type="mouseup"; break;
          default: return;
      }

      var simulatedEvent = document.createEvent("MouseEvent");
      
      var mult = 2;
      
      if( navigator.userAgent.match(/Android/i) ) {
          mult = 10
      }
      
      simulatedEvent.initMouseEvent(type, true, true, window, 1,
                                first.screenX, first.screenY,
                                (first.clientX * mult), (first.clientY * mult), false,
                                false, false, false, 0/*left*/, null);
      first.target.dispatchEvent(simulatedEvent);
  }
  
  
  $.fn.planetarium = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this);
    
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    
    
    el.each(function( index, value ) {
      var el2 = $(this);
      
      // Set predefined markup options
      var autospin = el2.data("ptr-autospin")  || settings.autospin,
          angle = el2.data("ptr-angle")  || settings.angle,
          glow = el2.data("ptr-glow")  || settings.glow,
          pattern = el2.data("ptr-pattern")  || settings.pattern,
          newsize = el2.data("ptr-size")  || settings.size,
          newfloat = el2.data("ptr-float")  || settings.float,
          ring = el2.data("ptr-ring")  || settings.ring,
          ringcolor = el2.data("ptr-ringcolor")  || settings.ringColor,
          ringangle = el2.data("ptr-ringangle")  || settings.ringAngle,
          dimension = newsize.split("x");
      
      
      
      // Create Space and Time    
      $(settings.space).addClass("ptr-space")
      
      // Shape the planets
      el2.addClass("ptr-shape");
      el2.wrapInner("<div class='ptr-planet'></div>")
      
      // Add Ring
      if (ring == true) {
        el2.append("<div class='ptr-ring'></div>")
        el2.find(".ptr-ring").css({
          "background": ringcolor,
          height: "2px",
          width: dimension[0] * 1.5,
          "transform": "rotate(" + ringangle + ")",
          "-moz-transform": "rotate(" + ringangle + ")",
          "-webkit-transform": "rotate(" + ringangle + ")",
          "margin-left": ((dimension[0] * 1.5)/2) * -1,
          "margin-top": -1.5,
        });
      }
      
      
      // Applying Floating Animation
      if (newfloat == true) el2.find(".ptr-planet").addClass("ptr-float");
      
      // Apply width, height, breathable air, weather forecast and tilted the planet
      el2.find(".ptr-planet").css({
        width: dimension[0],
        height: dimension[1],
        "box-shadow": glow,
        background: "url(" + pattern + ") repeat",
        "background-size": "cover",
        "-moz-background-size": "cover",
        "-webkit-background-size": "cover",
        "transform": "rotate(" + angle + ")",
        "-moz-transform": "rotate(" + angle + ")",
        "-webkit-transform": "rotate(" + angle + ")",
      });
      
      // Apply rotation
      if ( autospin != false ) {
        el2.find(".ptr-planet").css({
          "animation": "rotate " + autospin +" infinite linear",
          "-webkit-animation": "rotate " + autospin +" infinite linear",
          "-moz-animation": "rotate " + autospin +" infinite linear"
        });
      }
      
      
      // Function to handle interactive planets
      var $bg = el2.find(".ptr-planet"),
          elbounds = {
            w: parseInt($bg.parent().width()),
            h: parseInt($bg.parent().height())
          },
          origin = {x: 0, y: 0},
          start = {x: 0, y: 0},
          movecontinue = false;

      function move (e){

        var inbounds = {x: false, y: false},
            offset = {
                x: start.x - (origin.x - e.clientX),
                y: start.y - (origin.y - e.clientY)
            };
        inbounds.x = true;

        if (movecontinue && inbounds.x) {
            start.x = offset.x;
            start.y = 0;
        }

        $(this).find(".ptr-planet").css('background-position', start.x + 'px ' + start.y + 'px');


        origin.x = e.clientX;
        origin.y = e.clientY;

        e.stopPropagation();
        return false;
      }

      function handle (e){
          movecontinue = false;
          $bg.unbind('mousemove', move);

          if (e.type == 'mousedown') {
            $bg.parent().addClass("ptr-interacting");
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bg.parent().bind('mousemove', move);
          } else {
            $bg.parent().removeClass("ptr-interacting");
            $(document.body).focus();
          }

          e.stopPropagation();
          return false;
      }

      function reset (){
          start = {x: 0, y: 0};
          $(this).css('backgroundPosition', '0 0');
      }


      $bg.parent().bind('mousedown mouseup mouseleave', handle);
      $bg.parent().bind('dblclick', reset);
      
    });
    
  }
  
  
}(window.jQuery);