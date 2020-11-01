import './index.html';
import './style.css';

console.log('funguju!');
//navbar desktop
document
  .getElementsByClassName('btn-home')[0]
  .addEventListener('click', function () {
    window.scrollTo(0, document.querySelector('.banner').offsetTop);
  });
document
  .getElementsByClassName('btn-menu')[0]
  .addEventListener('click', function () {
    window.scrollTo(0, document.querySelector('.menu').offsetTop);
  });
document
  .getElementsByClassName('btn-galerie')[0]
  .addEventListener('click', function () {
    window.scrollTo(0, document.querySelector('.gallery').offsetTop);
  });
document
  .getElementsByClassName('btn-contact')[0]
  .addEventListener('click', function () {
    window.scrollTo(0, document.querySelector('.contacts').offsetTop);
  });
// navbar mobile
const nav = document.querySelector('.nav-closed');
const navLinks = document.querySelectorAll('.nav a');
const navLink = document.querySelector('.nav a');
const navBtn = document.querySelector('#nav-btn');

const NavBtnElm = (event) => {
  nav.classList.toggle('nav-closed');
};
navBtn.addEventListener('click', NavBtnElm);
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', NavBtnElm);
});
