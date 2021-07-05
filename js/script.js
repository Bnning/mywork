(function () {

    var controller = new ScrollMagic.Controller();
       var wipeAnimation = new TimelineMax()
      .fromTo(".two", 1, {y:"-100%"}, {y:"0%"} )
      .fromTo(".three", 1, {y:"-100%"}, {y:"0%"} )
      .fromTo(".four", 1, {y:"-100%"}, {y:"0%"} )
  
      var scene = new ScrollMagic.Scene({
                  triggerElement: "#container",
                  triggerHook: "2",
                  duration: "500%" //이 값이 클 수록 천천히 덮어씀
      })
      .setPin("#container")
      .setTween(wipeAnimation)
      .addIndicators() 
      .addTo(controller);
      
  }())