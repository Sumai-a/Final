let search = document.querySelector('.search');
let search_box = document.querySelector('.search_box');
let cross = document.querySelector('.cross');


search.addEventListener('click', ()=> {
    search_box.classList.add("search_active");
})

cross.addEventListener('click', ()=> {
    search_box.classList.remove('search_active');
})




/*banner strt*/

$(function(){
    $('.test_parent_banner').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,

        arrows: true,
        dots: true,
        dotsClass: 'dots_container container',
        // Optional: include dots for navigation
    });
});



const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



$('.productSlider').slick({
    //infinite: true



    slidesToShow: 4,
    prevArrow: '#newproduct .arrows .leftArrow',
    nextArrow: '#newproduct .arrows .rightArrow',

    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            // slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            // slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});







/*banner end*/