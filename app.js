// Popup JS
const navMenu = document.querySelector('.nav-menu');
const cross = document.querySelector('#cross');
const mobileMenu = document.querySelector('.mobile-menu');
const hamImage = document.querySelector('.imageone');

const menuOpen = (event) => {
  navMenu.style.display = 'none';
  mobileMenu.style.display = 'flex';
  mobileMenu.style.width = '375px';
  event.preventDefault();
};
const menuClose = () => {
  navMenu.style.display = 'block';
  mobileMenu.style.display = 'none';
};

hamImage.addEventListener('click', menuOpen);
cross.addEventListener('click', menuClose);
mobileMenu.addEventListener('click', menuClose);