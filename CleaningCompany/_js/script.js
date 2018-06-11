$(function() {

  "use strict";

  var topoffset = 50; //variable for menu height
    
    
function preloader() {
  //<![CDATA[
        $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $(".loader").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
             $(".header").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
              $(".footer").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
               $(".hero").delay(10).queue(function(){
               $(this).addClass("animate").dequeue();
            });
            setTimeout(function(){
               document.getElementById("HeroVideo").play();
            }, 2200);
            $("body").addClass("stop-scrolling").delay(6500).queue(function(){
               $(this).removeClass("stop-scrolling").dequeue();
            });
           $("#loader").delay(6500).queue(function(){
               $(this).addClass("u-display-none").dequeue();
            });
        })
    //]]>
}

  
    
    
  //Activate Scrollspy
  $('body').scrollspy({
    target: 'header .navbar',
    offset: topoffset
  });
    
    
    //Collapses toggle menu after selection
    $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});

  // add inbody class
  var hash = $(this).find('li.active a').attr('href');
  if(hash !== '#featured') {
    $('header nav').addClass('inbody');
  } else {
    $('header nav').removeClass('inbody');
  }

  //Use smooth scrolling when clicking on navigation
  $('.navbar a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling


  $('.carousel').carousel({
    interval: false
  });

});
//Allow for different scroll speeds
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];
  
  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });
  
  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  this.el.css('transform', 'translateY(' + -(scrollTop / this.speed) + 'px)');
};

// Initialization
$(function(){
  $('[data-scroll-speed]').moveIt();
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});