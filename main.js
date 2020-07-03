$(document).ready(function() {
    var nextButton = $('.next');
    var prevButton = $('.prev');
    nextButton.click(nextImg);
    prevButton.click(prevImg);
    $(document).keydown(function () {
        var key = event.which;
        if (key == 39 || key == 100) {
            nextImg(); 
        } else if ( key == 37 || key == 97 ) {
            prevImg();
        }
    })

    var dot = $('.nav i');
    dot.click(function () {
        dot.removeClass('active');
        $(this).addClass('active');
        $('.images img').removeClass('active');
        $($('.images img').get($('.nav i.active').index())).addClass('active');
    })
});


function nextImg() {
    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');
    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');
    
    if(imgActive.hasClass('last')) {
        $('.slider-wrapper img.first').addClass('active');  
        $('.slider-wrapper i.first').addClass('active');  
    } else {
        imgActive.next().addClass('active');
        iActive.next().addClass('active');
    }
}

function prevImg() {
    var imgActive = $('.slider-wrapper img.active');
    imgActive.removeClass('active');
    var iActive = $('.slider-wrapper i.active');
    iActive.removeClass('active');
    
    if(imgActive.hasClass('first')) {
        $('.slider-wrapper img.last').addClass('active');  
        $('.slider-wrapper i.last').addClass('active');  
    } else {
        imgActive.prev().addClass('active');
        iActive.prev().addClass('active');
    }
}