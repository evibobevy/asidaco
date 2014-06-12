

var chart = function(color){
if( typeof(color)==='undefined' ){
color = '#ED6B61';
}
$("#donutchart1, #donutchart2, #donutchart3, #donutchart4, #donutchart5").html('');

$("#donutchart1").donutchart({'size': 100, 'fgColor': color });
$("#donutchart1").donutchart("animate");

$("#donutchart2").donutchart({'size': 100, 'fgColor': color });
$("#donutchart2").donutchart("animate");

$("#donutchart3").donutchart({'size': 100, 'fgColor': color });
$("#donutchart3").donutchart("animate");

$("#donutchart4").donutchart({'size': 100, 'fgColor': color });
$("#donutchart4").donutchart("animate");

$("#donutchart5").donutchart({'size': 100, 'fgColor': color });
$("#donutchart5").donutchart("animate");

}

chart();




/*
 * Prety Photo Interrogation
 * */
jQuery(document).ready(function($){
      $("a[class^='prettyPhoto']").prettyPhoto();

});

/*
* Apply Browser Selector from plugin
* Apply Page scroll From Plugin
// * */
jQuery( document ).ready(function( $ ) {
// Select Browser with browserselector
    $.browserSelector();

    // If browser is chrome then add smooth scroll
    if($("html").hasClass("chrome")) {
        $.smoothScroll();
    }


// //  Sticky menu
     var nav = $('.rox-header');
     var scrolled = false;

     $(window).scroll(function () {

         if (500 < $(window).scrollTop() && !scrolled) {
             nav.addClass('sticky animated fadeInDown').animate({ 'margin-top': '0px' });

             scrolled = true;
         }

         if (500 > $(window).scrollTop() && scrolled) {
             nav.removeClass('sticky animated fadeInDown').css('margin-top', '0px');

             scrolled = false;
         }
     });

});

jQuery(document).ready(function($) {
    $( ".footer_area" ).append( "<a href=\'#\' class=\'back-to-top\'><i class=\'fa fa-angle-up\'></i></a>" );
    var offset = 220;
    var duration = 500;
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000);
        return false;
    })
});

jQuery(document).ready(function($) {
$('#playpause').click(function () {
    if ($("#full-video-bg").get(0).paused) {
        $("#full-video-bg").get(0).play();
    }
    else {
        $("#full-video-bg").get(0).pause();
    }
});
});
