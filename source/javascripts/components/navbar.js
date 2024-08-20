const hamburger = document.querySelector(`[data-navbar-target="hamburger"]`)
const navMenu = document.querySelector(`[data-navbar-target="menu"]`)
const navLinks = document.querySelectorAll(`[data-navbar-target="link"]`)

function toggleMenu() {
  hamburger.classList.toggle('is-open')
  navMenu.classList.toggle('is-open')
}

function closeMenu() {
  hamburger.classList.remove('is-open')
  navMenu.classList.remove('is-open')
}

hamburger.addEventListener('click', toggleMenu)
navLinks.forEach((link) => link.addEventListener('click', closeMenu))
