// Every JS file needs to start with $(document)

$(document).ready(function(){

    $('.js--section-features').waypoint(function(direction){
 
         if (direction == "down"){
 
             $('nav').addClass('sticky');
 
         } else {
 
            $('nav').removeClass('sticky');
        }
            
        }, {
            offset: '60px;'
    });
});