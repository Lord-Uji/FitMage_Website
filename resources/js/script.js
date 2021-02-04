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

});