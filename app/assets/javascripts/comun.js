$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = 300; // custom nav height
        ($(window).scrollTop() > navHeight) ? $('.navbar-default').addClass('navbar-fixed-top') : $('.navbar-default').removeClass('navbar-fixed-top');

    });

});
