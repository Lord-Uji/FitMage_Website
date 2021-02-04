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
        offset: '50%'
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
   
});