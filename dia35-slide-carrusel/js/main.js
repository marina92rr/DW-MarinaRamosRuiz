

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

//Slide Manual
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName('my__slides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

}

//Carrusel manual

let container = document.getElementById('container');
let ccarruselr = document.getElementById('carruselr');
let carrusels = document.getElementById('carrusel');
let buttons = document.getElementById('btn');

let currentPosition = 0;
let currentMargin = 0;
let carruselPerPage = 0;
let carruselsCount = carrusels - carruselPerPage;
let containerWidth = container.offsetWidth;
let pretKeyActive = false;
let nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
  containerWidth = container.offsetWidth;
  setParams(containerWidth);
}

function setParams(w) {
  if (w < 901) {
    carruselPerPage = 1;
  } else {
    if (w < 901) {
      carruselPerPage = 2;
    } else {
      if (w < 1101) {
        carruselPerPage = 3;
      } else {
        carruselPerPage = 4;
      }
    }
  }
}


function carruselRight() {

}
function carruselLeft() {

}