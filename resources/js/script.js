// Every JS file needs to start with $(document)

$(document).ready(function(){
/* For sticky navbar*/
    $('.js--section-features').waypoint(function(direction){
 
         if (direction == "down"){
 
             $('nav').addClass('sticky');
 
         } else {
 
            $('nav').removeClass('sticky');
        }
            
        }, {
            offset: '60px;'
    });

    /*Scroll on buttons*/
    /*--Hero Buttons--*/

    $('.js--scroll-to-plan').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top},1000);
    });
    
    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });


     /*--NAVBAR Buttons--*/

     $('.logo-text').click(function() {
        $('html, body').animate({scrollTop: $('header').offset().top},1000);
    });

    $('.js--btn-features').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });

    $('.js--btn-steps').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-steps').offset().top},1000);  
    });

    $('.js--btn-locations').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-cities').offset().top},1000);    
    });

    $('.js--btn-signup').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-signup').offset().top},1000);   
    });

    $('.js--btn-contact').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top},1000);     
    });


/*Animations on scroll*/

    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '60%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '90%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '50%'
    });

    /*-- Mobile navigation--*/
    $('.js--nav-icon, .js--main-nav a, .logo-text').click(function(element){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        //Gets the class name of the element that triggered the event
        var clicked = element.target.className;

        //Exists the function if the menu is closed AND the logo-black element (logo image) was clicked
        if (icon.hasClass('ion-navicon-round') && clicked == 'logo-text')
            return;

        //Opens and closes the menu
        if ($(window).width() < 767){
            nav.slideToggle(200);
        }

        //Changes icon states of the menu button
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });


    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 750){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });

});