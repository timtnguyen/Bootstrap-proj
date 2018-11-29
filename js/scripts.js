$(document).ready(function() {

    $('#mycarousel').carousel({ interval: 2000 }); 
    
    $('#carouselButton').click(function() {
        if ($(this).children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause'); 
            $(this).children('span').removeClass('fa-pause');
            $(this).children('span').addClass('fa-play'); 
        } else {
            $('#mycarousel').carousel('cycle'); 
            $(this).children('span').removeClass('fa-play');
            $(this).children('span').addClass('fa-pause'); 
        }
    });
    // $('#carousel-pause').click(function() {
    //     $('#mycarousel').carousel('pause'); 
    // });

    // $('#carousel-play').click(function() {
    //     $('#mycarousel').carousel('cycle'); 
    // });
    $('#login').click(function() {
        $('#loginModal').modal('show'); 
    });

    $('#reserveTable').click(function() {
        $('#reserveModal').modal('show'); 
    }); 
}); 