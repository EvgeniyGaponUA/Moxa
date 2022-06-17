let loader=document.querySelector('.loader');

window.onload = function () {
    window.setTimeout(function () {
        loader.classList.add('active');
    }, 3000);
}


const swiper = new Swiper('.row-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 60,
    loop: true,
    autoplay: { 
        delay: 2000,
        disableOnInteraction: false,
    },
    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

let header=document.querySelector('.header');
let headerBurger=document.querySelector('.header__burger');
let headerNav=document.querySelector('.header__nav');
let mainBlock=document.querySelector('.main__block');

headerBurger.onclick= ()=> {
    header.classList.toggle('active');
    headerNav.classList.toggle('active');
    headerBurger.classList.toggle('active');

}

window.onscroll= ()=> {
    header.classList.remove('active');
    headerNav.classList.remove('active');
    headerBurger.classList.remove('active');
}
