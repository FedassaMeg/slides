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
firstImg = new Image();
firstImg.src = './img/ender3_s1.jpg';
secondImg = new Image();
secondImg.src = './img/flsun.jpg';
thirdImg = new Image();
thirdImg.src = './img/prusa_mini.jpg';
fourthImg = new Image();
fourthImg.src = './img/voron2_4.JPG';

// const imgArray = [firstImg, secondImg, thirdImg, fourthImg];
const imgArray = [{
  ele: firstImg,
  title: 'Ender 3 S1',
  desc: 'description 1 goes here words words words words words words',
}, {
  ele: secondImg,
  title: 'Flsun SR',
  desc: 'description 2 goes here',
}, {
  ele: thirdImg,
  title: 'Prusa Mini+',
  desc: 'description 3 goes here words words words words words words words words words words words words',
}, {
  ele: fourthImg,
  title: 'Voron 2.4',
  desc: 'description 4 goes here',
}]

function replaceImg() {
  const currIndex = counter % imgArray.length
  imgWrapper.removeChild(imgWrapper.lastChild);
  imgWrapper.appendChild(imgArray[currIndex].ele);
  // I need to add an animation or something around here
  // setTimeout(imgRight, 5900);
} 

function replaceTitle() {
  title.textContent = imgArray[counter % imgArray.length].title;
  desc.textContent = imgArray[counter % imgArray.length].desc;
}

const imgLeft = () => {
  counter === 0 ? counter = imgArray.length - 1 : --counter;
  replaceImg();
  replaceTitle();
}

const imgRight = () => {
  ++counter;
  replaceImg();
  replaceTitle();
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
    imgWrapper.removeChild(imgWrapper.lastChild);
    imgWrapper.appendChild(imgArray[index].ele);
    replaceTitle();
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
  replaceTitle();
}, 3900); // I want this interval to be reset when a button is clicked
// because rn it progresses the slide every 3900ms regardless of when last btn was clicked

// append first image from array to DOM
imgWrapper.appendChild(imgArray[0].ele); 
// initialize title
replaceTitle();








// ignore this
const menuToggler = () => {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  } else {
    menu.classList.add('visible');
  }
}

header.onclick = menuToggler;