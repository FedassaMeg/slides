const header = document.querySelector('.header');
const title = document.querySelector('.title');
const menu = document.querySelector('.menu');
const menuDarken = document.querySelector('.menu-darken');
const imgWrapper = document.querySelector('.img-wrapper');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dotContainer = document.querySelector('.dot-container');
const descPrice = document.querySelector('.price-value');
const descText = document.querySelector('.desc-text');

let counter = 0;
let slideTime = 6400;

// there has to be a better way to generate this 
ender = new Image();
ender.src = './img/ender3_s1.jpg';
flsun = new Image();
flsun.src = './img/flsun.jpg';
prusa = new Image();
prusa.src = './img/prusa_mini.jpg';
voron = new Image();
voron.src = './img/voron2_4.JPG';

const imgArray = [{
  ele: ender,
  title: 'Ender 3 S1',
  desc: 'The Ender 3 S1 is a cartesian printer developed by Creality, and is an improved version of the immensely popular Ender 3.',
  price: '$419.99'
}, {
  ele: flsun,
  title: 'Flsun SR',
  desc: 'The SR (Super Racer) is a delta printer made by Flsun, known for its ridiculous speed, reaching at least 150mm/s with a stock configuration.',
  price: '$459.99'
}, {
  ele: prusa,
  title: 'Prusa Mini+',
  desc: 'The Prusa Mini+ is a small and simple cartesian printer and is known for its cheap price and high quality, but it has a small build volume.',
  price: '$349.99'
}, {
  ele: voron,
  title: 'Voron 2.4',
  desc: 'The Voron 2.4 is a coreXY printer that is best-in-class and can print at speeds of up to 1000mm/s, but requires you to build it yourself.',
  price: "$Too much"
}]

function replaceImg() {
  const currIndex = counter % imgArray.length
  imgWrapper.removeChild(imgWrapper.lastChild);
  imgWrapper.appendChild(imgArray[currIndex].ele);
  resetAutoSlide(); // reset slideshow timer
}

function replaceText() {
  title.textContent = imgArray[counter % imgArray.length].title;
  descPrice.textContent = imgArray[counter % imgArray.length].price;
  descText.textContent = imgArray[counter % imgArray.length].desc;
}

const imgLeft = () => {
  counter === 0 ? counter = imgArray.length - 1 : --counter;
  replaceImg();
  replaceText();
}

const imgRight = () => {
  ++counter;
  replaceImg();
  replaceText();
}

left.onclick = imgLeft;
right.onclick = imgRight;

// generate navigation dots
genNavDot = (index) => {
  dot = document.createElement('div');
  dot.classList.add('dot');
  dot.textContent = index + 1;
  dot.onclick = () => {
    counter = index;
    replaceImg();
    replaceText();
  }
  return dot;
}

// generate proper amount of nav dots based on how many items are in the imgArray
imgArray.forEach((item, index) => {
  console.log(item);
  dotContainer.append(genNavDot(index));
})

// make the slideshow progress automatically if no buttons are clicked
let autoSlide = setInterval(imgRight, slideTime);
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(imgRight, slideTime);
}

// initialize first image and text
imgWrapper.appendChild(imgArray[0].ele); 
replaceText();












// ignore this, it's for the basic nav menu
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