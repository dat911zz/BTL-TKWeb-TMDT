
$(document).ready(function () {
    $('#responsive').lightSlider({
        item: 4,
        auto: true,
        loop: true,
        slideMove: 2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed: 1200,
        pause: 3000,
        adaptiveHeight: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 2560,
                settings: {
                    item: 5,
                    slideMove: 1,
                    slideMargin: 8,
                }
            },
            {
                breakpoint: 1450,
                settings: {
                    item: 4,
                    slideMove: 1,
                    slideMargin: 8,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    item: 3,
                    slideMove: 1,
                    slideMargin: 6,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    item: 2,
                    slideMove: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }
        ]
    });
});
