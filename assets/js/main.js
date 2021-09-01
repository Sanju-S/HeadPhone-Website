// ======================= SHOW MENU =======================
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// MENU SHOW 
// validate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// MENU HIDE
// validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

// ======================= REMOVE MENU MOBILE =======================
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ======================= CHANGE BACKGROUND HEADER =======================
const scrollHeader = () => {
    const header = document.getElementById('header')

    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);

// ======================= SCROLL UP =======================
const scrollUp = () => {
    const scrollUP = document.getElementById('scroll-up')

    if (this.scrollY >= 200) scrollUP.classList.add('show-scroll');
    else scrollUP.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// ======================= SCROLL SECTIONS ACTIVE LINK =======================
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);

// ======================= SCROLL REVEAL ANIMATION =======================
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true;
})

sr.reveal(`.home__header, .section__title`, {delay: 600})
sr.reveal(`.home__footer`, {delay: 700})
sr.reveal(`.home__img`, {delay: 900, origin:'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`, {origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`, {origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`, {origin: 'right'})
sr.reveal(`.case__img`, {origin: 'top'})
