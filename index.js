//Home
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 4,
        margin: 10,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        touchDrag: true,
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        responsiveClass: true,
        // responsive: {
        //     0: {
        //         items: 1,
        //         nav: true
        //     },
        //     600: {
        //         items: 3,
        //         nav: false
        //     },
        //     1000: {
        //         items: 5,
        //         nav: true,
        //         loop: false
        //     }
        // }
    });
});
    
$('.img-carousel').owlCarousel({
        items: 1,
        margin: 15,
        loop: true,
        nav: true,
        // responsiveClass: true,
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     600: {
        //         items: 3
        //     },
        //     1000: {
        //         items: 5
        //     }
        // }
    });
    
// Defence_Installation


$(document).ready(function () {
    $('.Sectors-KeyArea-carousel').owlCarousel({
        items: 3,
        margin: 2,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        touchDrag: true,
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        responsiveClass: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true
            }
        }
    });
});


$(document).ready(function () {
    $('.Sectors-KeyProject-carousel').owlCarousel({
        items: 4,
        margin: 0,
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        animateOut: 'slideOutDown',
        animateIn: 'pulse',
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false,
                loop: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });
});