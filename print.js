const menu = document.querySelector('.menu');
const header = document.querySelector('.header');

const menuToggler = () => {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  } else {
    menu.classList.add('visible');
  }
}

header.onclick = menuToggler;