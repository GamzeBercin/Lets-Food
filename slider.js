const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  loop: true,
  autoplay: {
    delay: 3000,
  },

  mousewheel: true,

  pagination: {
    el: ".swiper-pagination",
  },
});
