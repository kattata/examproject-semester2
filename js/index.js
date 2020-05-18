
$('.center').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
    centerPadding: '0',
    arrows: true,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: false,
                slidesToShow: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }
    ]
});

