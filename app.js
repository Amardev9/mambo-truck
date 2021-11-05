
// Menu
const menuSpan = document.querySelectorAll('.menu-span');
menuSpan.forEach(el =>{
  if(el.textContent == ''){
    el.style.backgroundColor = "white";
  }
})

// Burger Slider
const swiper = new Swiper('.burger-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    breakpoints: {
      600: {
          slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      
      1200:{
        slidesPerView: 4,
      }
  }
  });

  //  Testimonial Slider
const swiper2 = new Swiper('.testimonial-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 16,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  

});