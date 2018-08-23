

function setHeroImage(img) {
    // set source and alt attributes from a previously selected image
    $('.hero img').attr({
        'src': img.attr('src'),
        'alt': img.attr('alt')
    });
}

function carouselHandler() {
    $('.thumbnail').click(function(event) {
        let selectedImage = $(this).find('img');
        setHeroImage(selectedImage);
    });
}

$(carouselHandler);