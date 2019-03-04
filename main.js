$(document).ready(function () {

  "use strict";

  // Toggle Dark Theme
  var clicks = 0;
   $("#tgl").on( "click", function() {
     $('#onOff').toggleClass('lft', 'onOffColor');
     $('.fa-chevron-down').toggleClass('chevronDown');
     $('[data-scroll="about"]').click();
     $('.fixed-menu').css('border-right', '2px solid #EEE');
     $('.fixed-menu .fa-gear').click();

    if(clicks == 0){
       $("link[href*='theme'] ").attr("href",  'https://raw.githack.com/yusufSunset/yusuf/master/main.js');
       clicks++;
     }else if(clicks == 1){
       $("link[href*='theme'] ").attr("href",  'https://cdn.staticaly.com/gh/yusufSunset/yusuf/bdd01099/default-theme.css');
       --clicks;
     }

  });

  // Fixed Menu
    $('.fixed-menu .fa-gear').click(function (){
      $(this).parent().toggleClass('left-fxd');
      $('.full-page').toggleClass('blur-full-page');
    });

// Change Color Theme
$('.fixed-menu .change-color li, #tgl').click(function (){

  var colorChosed =  this.style.backgroundColor;

  var atColor = $("link[href*='theme'] ").attr("href",  $(this).attr("data-value"));

$("link[href*='theme'] ").attr("href",  $(this).attr("data-value"));
$('#ascrail2000 > div').attr('href', atColor);
$('.fixed-menu .fa-gear').click(); // When Choose Color In Same Time Click On fa-gear To Hide Menu

});

  ///// Start All Tricks scroll ///////
  $('.navbar li a').click(function(e){

    e.preventDefault();

    $('html, body').animate({

      // '#' + $(this).data('scroll') = #id
      scrollTop: $('#' + $(this).data('scroll')).offset().top
}, 800);﻿
    });

    // Make Nice Scroll
    $("html").niceScroll({
      cursorcolor: '#FFD300',
      cursorwidth: '8px',
      cursorborder : '0',
      cursorhorizontal : 'hidden',
      corsorborderradius: "10px",
      zindex : '9999'
    });

var scrltotop = $('.scrollToTop');
$(window).scroll(function (){
    // Show & Hide Button Scroll To Top
    if($(window).scrollTop() >= 1200){
        if(scrltotop.is(':hidden')){
          scrltotop.fadeIn(500);
        }
        } else {
          scrltotop.fadeOut(500);
    }
});

// Scroll To Top
scrltotop.click(function (event){

    event.preventDefault();

    $('html, body').animate({
      scrollTop : 0
    }, 1000);
  });

  // Scroll To Bottom



  $('.header .fa-chevron-down').click(function(e){

    e.preventDefault();

    $('html, body').animate({

      // '#' + $(this).data('scroll') = #id
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    }, 2000);﻿
    });

  });

///// End All Tricks scroll /////

    // Click To Read More
  var clicks = 0; // This Global Variable Use In Sections About & Our Workss & Blogs
  $('.about .btn1').click(function (){
    $('.about .read-more').slideToggle(500);

    if (clicks == 0) {
      $(this).text('Read Less');
      clicks++;
    } else {
      $(this).text('Read More');
      --clicks;
    }
  });

  // Show Only Item You Choose & Hide Others Items(Opacity)
  $('.our-works .list-awesome li').click(function (){
    $(this).addClass('selected').siblings().removeClass('selected');

    $('.work').css('opacity', '.19');
    $('.' + $(this).data('class')).show().css('opacity', '1');
  });


  // Click To Show More Our Works
  $('.our-works .see-more').click(function (){
    $('.more-works').slideToggle(500);

  // Change Text Button
  if(clicks == 0){
    $(this).text('Show Less');
    clicks++;
  } else {
    $(this).text('Show More');
    --clicks;
  }
});

  $('.blogs .see-more').click(function (){
    $('.more-blogs').slideToggle(500);

  if(clicks == 0){
    $(this).text('Show Less');
    clicks++;
  } else {
    $(this).text('Show More');
    --clicks;
  }
});

// Add Text Center In Heading Footer
  updateContainer();
    $(window).resize(function() {
    updateContainer();
});

function updateContainer() {
var $containerWidth = $(window).width();
if ($containerWidth < 767) {
  $('footer .heading').css({'text-align': 'center', 'margin-bottom' : '40px'});
  $('.our-works h2').css({'font-size': '16px'});
  $('.our-works h2:after').css({'top': '15px', 'right': '-30px', 'width': '25px'});
  $('.our-works h2:before').css({'top': '15px', 'left': '-30px', 'width': '25px'});
  $('.blogs p').css({'padding': '15px 0'});
} else {
  $('footer .heading').css({'text-align': 'inherit', 'margin-bottom' : '0'});
  $('.our-works h2').css({'font-size': '30px'});
  $('.blogs p').css({'padding': '30px 0'});
}};
