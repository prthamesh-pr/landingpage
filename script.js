// var swiper = new Swiper(".swiper-container", {
//   effect: "coverflow",
//   grabCursor: true,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 200,
//     modifier: 1,
//     slideShadows: true,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   loop: true,
// });

var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });
  
  // Toggle
  const toggle = document.querySelector(".toggle");
  const nav = document.querySelector(".main-nav");
  
  toggle.addEventListener("click", () => {
    nav.classList.toggle("show");
    toggle.classList.toggle("show");
  });