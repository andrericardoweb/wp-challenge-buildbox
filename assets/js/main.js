// Initialize Swiper
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  spaceBetween: 16,
  //autoHeight: true,
  
  breakpoints: {
    767: {
      grabCursor: true,
      spaceBetween: 30,
    }
  }
});