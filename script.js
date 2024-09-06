const burgerMenu = document.querySelector('.burger_menu');
const mainNav = document.querySelector('.menu1');
burgerMenu.addEventListener('click',() => {
    burgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
});

$(document).ready(function(){
    $('.strength2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        centerMode: true,
        // adaptiveHeight: true,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1174,
              settings: {
                slidesToShow: 3,
                variableWidth: true,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
                variableWidth: true,
              }
            }
        ]
    })
    .on('afterChange', function(event, slick, currentSlide){
        updateSecondAndSecondLast();
    });

    $('.reviews').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        speed: 300,
        centerMode: true,
        // adaptiveHeight: true,
        // variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 1174,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 1,
              }
            }
        ]
    })

    updateSecondAndSecondLast();

    // Function to update second and second-to-last slick-active elements
    function updateSecondAndSecondLast() {
        // Remove any previous changes to ensure we're working with fresh elements
        $('.strength2 .slick-active').removeClass('second-slick-active second-last-slick-active');

        // Get the collection of all slick-active elements
        var slickActiveElements = $('.strength2 .slick-active');

        // Add class to the second slick-active (index 1)
        if (slickActiveElements.length > 1) {
            slickActiveElements.eq(1).addClass('second-slick-active');
        }

        // Add class to the second-to-last slick-active (index -2)
        if (slickActiveElements.length > 3) {
            slickActiveElements.eq(slickActiveElements.length - 2).addClass('second-last-slick-active');
        }
    }
  });