// * Slider
const owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3,
});

// Go to the previous item
$('.slider-btn-prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})

// Go to the next item
$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})

// * Burger
const navBtn = document.querySelector('.burger-button');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

navBtn.onclick = function(){
    nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
}