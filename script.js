const xMark = document.querySelector("#nav-ul");
let a = 0;

function changeDisplayBurger() {
    if(a === 0) {
        xMark.style.display = "block";
        a = 1;
        document.body.classList.toggle("_lock");
    }else if(a === 1){
        xMark.style.display = "none";
        a = 0;
        document.body.classList.toggle("_open");
    }
}

const slider = document.querySelector('.swiper');

const swiper = new Swiper(slider, {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
        767: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 2,
        },
        1279: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
    lazy: {
        loadPrevNext: true,
    },
});