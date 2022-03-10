const header = document.querySelector('.header');
const title = document.querySelector('.title');
const menu = document.querySelector('.menu');
const imgWrapper = document.querySelector('.img-wrapper');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dotContainer = document.querySelector('.dot-container');
const desc = document.querySelector('.desc');

let counter = 0;

// there has to be a better way to generate this 
ender = new Image();
ender.src = './img/ender3_s1.jpg';
flsun = new Image();
flsun.src = './img/flsun.jpg';
prusa = new Image();
prusa.src = './img/prusa_mini.jpg';
voron = new Image();
voron.src = './img/voron2_4.JPG';

// const imgArray = [firstImg, secondImg, thirdImg, fourthImg];
const imgArray = [{
  ele: ender,
  title: 'Ender 3 S1',
  desc: 'description 1 goes here words words words words words words',
  price: '$499.99'
}, {
  ele: flsun,
  title: 'Flsun SR',
  desc: 'description 2 goes here',
  price: '$459.99'
}, {
  ele: prusa,
  title: 'Prusa Mini+',
  desc: 'description 3 goes here words words words words words',
  price: '$349.99'
}, {
  ele: voron,
  title: 'Voron 2.4',
  desc: 'description 4 goes here',
  price: "$too much"
}]

function replaceImg() {
  const currIndex = counter % imgArray.length
  imgWrapper.removeChild(imgWrapper.lastChild);
  imgWrapper.appendChild(imgArray[currIndex].ele);
  // I need to add an animation or something around here
  // setTimeout(imgRight, 5900);
} 

function replaceText() {
  title.textContent = imgArray[counter % imgArray.length].title;
  desc.textContent = imgArray[counter % imgArray.length].desc;
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
    // console.log(index);
    counter = index;
    replaceImg();
    replaceText();
  }
  return dot;
}

imgArray.forEach((item, index) => {
  console.log(item);
  dotContainer.append(genNavDot(index));
})

const autoSlide = setInterval(function() {
  ++counter;
  replaceImg();
  replaceText();
}, 3900); // I want this interval to be reset when any button is clicked
// because rn it progresses the slide every 3900ms regardless of when last btn was clicked

// append first image from array to DOM, then initialize text
imgWrapper.appendChild(imgArray[0].ele); 
replaceText();










// ignore this
const menuToggler = () => {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  } else {
    menu.classList.add('visible');
  }
}

header.onclick = menuToggler;