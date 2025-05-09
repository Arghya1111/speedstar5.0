/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/* Menu show */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/* Menu hidden */
if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Add this if needed: remove menu on nav link click
// const navLinks = document.querySelectorAll('.nav__link')
// navLinks.forEach(n => n.addEventListener('click', () => {
//   navMenu.classList.remove('show-menu')
// }))

/*=============== SWIPER HOME ===============*/ 
const swiperHome = new Swiper('.home__swiper', {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (index, className) => {
      return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
    },
  },
  autoplay:{
    delay: 5000,
  }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  window.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  window.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if(sectionsClass){
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      } else {
        sectionsClass.classList.remove('active-link')
      }
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/ 
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
  // reset: true,
})

sr.reveal(`.home__bg`, {
  scale: 1.1,
  opacity: 1
})

sr.reveal(`.home__swiper`, {
  origin: 'right',
  distance: '300px',
  delay: 800
})

sr.reveal(`.home__data`, {
  origin: 'bottom',
  distance: '120px',
  delay: 1600
})

sr.reveal(`.info__img`, {
  origin: 'left',
  distance: '120px',
  delay: 1000,
  opacity: 0
})
