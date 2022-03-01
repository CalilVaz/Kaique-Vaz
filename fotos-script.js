
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

/*Scroll Reveal: Mostrar elementos quando der scroll na página*/

let body = document.querySelector('body')
let width = 710

if (body.offsetWidth <= 710) {
  const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true,
    
  })
  
  scrollReveal.reveal(
    `#container-grid .foto
    `,  {interval: 100 })
}
