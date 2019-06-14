///// nav barrrrrrrr
$(document).on("scroll", function () {
	if ($(document).scrollTop() > 100) {
		$("header").addClass("small");
	} else {
		$("header").removeClass("small");
	}
});
/////////////////////////

$('#nav-bar-btn').click(function(){
    $('#myNavbar').toggle();
});
//////////   login form

    $('#signup').click(function() {
		  $('#login-form').hide();
		  $('.login-form').toggle();
      // $("#login").css('margin-right','451px');
		});

		$('#login---login').click(function(){
		  $('#login-form').fadeIn();
		  $('#sign-up-form').hide(); 
      // $("#login").css('margin-right','451px'); 		
		});

////////////// counter
$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});

 jQuery(document).ready(function($) {
            $('.number').counterUp({
                delay: 10,
                time: 1000
            });
        });
///////////////////////////////////

////////////// scroll top
$(document).ready(function(){
	//caching the scroll top element
        var scrollButton = $("#scroll-top");
        $(window).scroll(function()
        {
          if($(this).scrollTop() >= 700){
             scrollButton.show();
          }
          else{
            scrollButton.hide();
          }
        });

        scrollButton.click(function() // 3shan lma kant gowa window w ndos 3la el sehm mknsh byrda ynzl b scroll tany
          {
             $("html,body").animate({scrollTop : 0},600);
          });
});


////////////////
// trigger nicescroll
$('html').niceScroll({

  cursorcolor: '#6bb6ff',
    cursorwidth:'10px',
    cursorborder:'1px solid #6bb6ff',
    cursorborderradius: '0'
});

///////////////////// co operation
$(document).ready(function() {
      $('#Carousel').carousel({
          interval: 5000
      })
  });

//////////////////////////////  carosel ttw3aaat
$(document).ready(function() {

  var owl = $("#xx");
  owl.owlCarousel({
      items : 3, 
      itemsDesktop : [992,3],
      itemsDesktopSmall : [768,2], 
      itemsTablet: [480,2], 
      itemsMobile : [320,1]
  });
  $(".next").click(function(){ owl.trigger('owl.next'); });
  $(".prev").click(function(){ owl.trigger('owl.prev'); });

$('.latest-blog-posts .thumbnail.item').matchHeight();
  
});

$(document).ready(function() {

  var owl = $("#owl-demo-2");
  owl.owlCarousel({
      items : 3, 
      itemsDesktop : [992,3],
      itemsDesktopSmall : [768,2], 
      itemsTablet: [480,2], 
      itemsMobile : [320,1]
  });
  $(".next").click(function(){ owl.trigger('owl.next'); });
  $(".prev").click(function(){ owl.trigger('owl.prev'); });

$('.latest-blog-posts .thumbnail.item').matchHeight();
  
});


///////////////////////// Deadline
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var x = document.getElementsByClassName("clockdiv");

  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
var deadline = new Date(Date.now() + 1 * 30 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);
initializeClock('clockdiv1', deadline);
initializeClock('clockdiv2', deadline);
initializeClock('clockdiv3', deadline);
initializeClock('clockdiv4', deadline);
initializeClock('clockdiv5', deadline);
initializeClock('clockdiv6', deadline);
initializeClock('clockdiv7', deadline);
initializeClock('clockdiv8', deadline);

///////////////////////////

$(document).ready(function(){
  
  // show hidden-item item from our work

  $('.show-more').click(function(){
      $('.our-work .hidden-item').show();
      $('.show-more').text('show less').click(function(){
      $('.our-work .hidden-item').fadeOut(1000);
      $('.show-more').text('show more')
    });
  });

  $('.show-more2').click(function(){
      $('.our-donation .hidden-item').show();
      $('.show-more2').text('show less').click(function(){
      $('.our-donation .hidden-item').fadeOut(1000);
      $('.show-more2').text('show more')
    });
  });
  
});


  ///////////////////////////////////////////////// type writing

  
// function autoType(elementClass, typingSpeed){
//   var thhis = $(elementClass);
//   thhis.css({
//     "position": "relative",
//     "display": "inline-block"
//   });
//   thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
//   thhis = thhis.find(".text-js");
//   var text = thhis.text().trim().split('');
//   var amntOfChars = text.length;
//   var newString = "";
//   thhis.text("|");
//   setTimeout(function(){
//     thhis.css("opacity",1);
//     thhis.prev().removeAttr("style");
//     thhis.text("");
//     for(var i = 0; i < amntOfChars; i++){
//       (function(i,char){
//         setTimeout(function() {        
//           newString += char;
//           thhis.text(newString);
//         },i*typingSpeed);
//       })(i+1,text[i]);
//     }
//   },1500);
// }

// $(document).ready(function(){ 
//   autoType(".type-js",200);
// });

/////////////////////////////////

// loading screen
  $(window).on("load",function()
  {
    $(".loading-overlay .spinner").fadeOut(1000,function()
      {
        $(this).parent().fadeOut(1000,function()
      {
            $("body").css("overflow","auto");
            $(this).remove(); // 3shan y3ml hide l section loading
          });
      });
  });


