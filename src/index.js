import './index.html';
import './style.css';

console.log('funguju!');
//2. navbar desktop
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
// 3. navbar mobile
const nav = document.querySelector('.nav-closed');
const navLinks = document.querySelectorAll('.nav a');
const navLink = document.querySelector('.nav a');
const navBtn = document.querySelector('#nav-btn');
//posluchač události - přidává třídu nav-closed na celý element nav
const NavBtnElm = (event) => {
  nav.classList.toggle('nav-closed');
};
//po kliknutí na button menu přidá posluchač viz výše
navBtn.addEventListener('click', NavBtnElm);
//po kliknutí na odkaz v menu přidá posluchač viz výše
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', NavBtnElm);
});

//4. objednávání
let ordered = false;
const drink = document.querySelector('.drink__cup');
const orderBtn = document.querySelector('.order-btn');

orderBtn.addEventListener('click', () => {
  drink.classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtn.textContent = 'zrušit';
  } else {
    orderBtn.textContent = 'objednat';
  }
  ordered = !ordered;
});
