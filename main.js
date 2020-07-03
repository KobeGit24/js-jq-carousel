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

    var firstDot = $('.fa-circle:nth-of-type(1)');
    var secondDot = $('.fa-circle:nth-of-type(2)');
    var thirdDot = $('.fa-circle:nth-of-type(3)');
    var fourthDot = $('.fa-circle:nth-of-type(4)');

    var firstImg = $('.images img:nth-of-type(1)');
    var secondImg = $('.images img:nth-of-type(2)');
    var thirdImg = $('.images img:nth-of-type(3)');
    var fourthImg = $('.images img:nth-of-type(4)');

    firstDot.click(function(){
        firstDot.addClass('active');
        secondDot.removeClass('active');
        thirdDot.removeClass('active');
        fourthDot.removeClass('active');

        firstImg.addClass('active');
        secondImg.removeClass('active');
        thirdImg.removeClass('active');
        fourthImg.removeClass('active');
    });

    secondDot.click(function(){
        secondDot.addClass('active');
        firstDot.removeClass('active');
        thirdDot.removeClass('active');
        fourthDot.removeClass('active');

        secondImg.addClass('active');
        firstImg.removeClass('active');
        thirdImg.removeClass('active');
        fourthImg.removeClass('active');
    });

    thirdDot.click(function(){
        thirdDot.addClass('active');
        secondDot.removeClass('active');
        firstDot.removeClass('active');
        fourthDot.removeClass('active');

        thirdImg.addClass('active');
        secondImg.removeClass('active');
        firstImg.removeClass('active');
        fourthImg.removeClass('active');
    });
    
    fourthDot.click(function(){
        fourthDot.addClass('active');
        secondDot.removeClass('active');
        thirdDot.removeClass('active');
        firstDot.removeClass('active');

        fourthImg.addClass('active');
        secondImg.removeClass('active');
        thirdImg.removeClass('active');
        firstImg.removeClass('active');
    });
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