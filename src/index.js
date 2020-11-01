import './index.html';
import './style.css';

console.log('funguju!');

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
