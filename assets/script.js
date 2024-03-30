// navbar js 
let menu = document.querySelector("#nav-menu");
let close = document.querySelector("#close");
let nav = document.querySelector(".nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

// swiper js 

var swiper = new Swiper(".mySwiper", {

    slidesPerView: "auto",
    centeredSlides: true,
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 22,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },

    keyboard: {
        enabled: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    

});