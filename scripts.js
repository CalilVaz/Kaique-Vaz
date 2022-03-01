/* Mostrar e tirar menu hamburguer */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Colocar sombra no header */

const header = document.querySelector('#header')
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')  
  }
})

/* Slide de fotos */

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  Keyboard: true,
  breakpoints: {
    1030:{
      slidesPerView: 3,
      setWrapperSize: true,
   },
     500:{
        slidesPerView: 2,
        setWrapperSize: true,
     },
  },
  
});

/*Scroll Reveal: Mostrar elementos quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #biography .image, #biography .text,
  #podcast header, #podcast .card,
  #photos header, #photos .photos,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,  {interval: 100 })

/* Menu ativo conforme a seção na página */

const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for ( const section of sections ) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.add('active')
    } else{
      document
      .querySelector('nav ul li a[href*=' + sectionId + ']')
      .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})