const swiper = new Swiper(".slider-info", {
    speed: 1000,
    spaceBetween: 60,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dinamicBullets: true
    },
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true
    }
})

