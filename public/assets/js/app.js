const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// MUDAR O HEADER DA PAG QUANDO DER SCROLL
const header = document.querySelector('#header')
const navHeight = header.offsetHeight


window.addEventListener('scroll', function() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

// TESTIMONIALS CAROUSEL SLIDER

const swiper = new Swiper('.swiper-container', {

  slidesPerView: 1,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.swiper-pagination'
  },
  // mousewheel: true,
  keyboard: true,


})

// SCROLL REVEAL

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1300,
  reset: true
}) 

ScrollReveal().reveal('.reveal');


// BUTTON BACK TO TOP
const backToTopBtn = document.querySelector('.back-to-top')

window.addEventListener('scroll', function(){
  if (window.scrollY >= 560) {
    backToTopBtn.classList.add('show')
  } else {
    backToTopBtn.classList.remove('show')
  }
})
