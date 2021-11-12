const body = document.getElementById('body');

document.addEventListener('DOMContentLoaded', () => {
  // animation
  AOS.init({
    once: true,
    easing: 'ease-in-sine',
    duration: 600,
  });

  // Spinner

  const loadingOverlay = document.querySelector('.loading-overlay');
  setTimeout(() => {
    body.classList.remove('overflow-h');
    loadingOverlay.classList.add('hide-loading');
  }, 2000);

  // Nav
  const toggler = document.querySelector('.nav-toggler');
  const overlay = document.querySelector('#overlay');
  const close = document.querySelector('.close');

  toggler.addEventListener('click',()=>{
    overlay.classList.add('nav-open');
    
  })

  close.addEventListener('click',()=>{
    overlay.classList.remove('nav-open');
  })
  
  const mobileNavLink = document.querySelectorAll('.m');
  mobileNavLink.forEach(element => {
    element.addEventListener('click', ()=>{
      overlay.classList.remove('nav-open');
    })
  });

  const goBackBtn = document.querySelector('.go-back-btn');
  window.addEventListener('scroll',()=>{
    if(window.scrollY > 500){
      goBackBtn.classList.add('show');
    }

    if(window.scrollY < 500){
      if(goBackBtn.classList.contains('show')){
        goBackBtn.classList.remove('show');
      }
    }
  })

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
  effect: 'fade',
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  });
})









