const menu = document.querySelector('.menu');
const header = document.querySelector('.header');
const menuDarken = document.querySelector('.menu-darken');

const menuToggler = () => {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
    menuDarken.classList.remove('visible');
  } else {
    menu.classList.add('visible');
    menuDarken.classList.add('visible');
  }
}

header.onclick = menuToggler;
menuDarken.onclick = menuToggler;