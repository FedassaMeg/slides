const header = document.querySelector('.header');
const menu = document.querySelector('.menu');
const imgWrapper = document.querySelector('.img-wrapper');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const dotContainer = document.querySelector('.dot-container');


// there has to be a better way to do this 
firstImg = new Image();
firstImg.src = './img/mac.jpg';
secondImg = new Image();
secondImg.src = './img/apple.jpg';
thirdImg = new Image();
thirdImg.src = './img/bridge.jpg';
fourthImg = new Image();
fourthImg.src = './img/sus.jpg';

const imgArray = [firstImg, secondImg, thirdImg, fourthImg];

let counter = -1;

// append first image from array to DOM
imgWrapper.appendChild(imgArray[0]); 

function replaceImg() {
  const currIndex = counter % imgArray.length
  console.log(currIndex);
  imgWrapper.removeChild(imgWrapper.lastChild);
  imgWrapper.appendChild(imgArray[currIndex]);
  // setTimeout(imgRight, 5900);
} 

const imgLeft = () => {
  counter === 0 ? counter = imgArray.length - 1 : --counter;
  replaceImg();
}

const imgRight = () => {
  ++counter;
  replaceImg();
}


left.onclick = imgLeft;
right.onclick = imgRight;

genNavDot = (index) => {
  dot = document.createElement('div');
  dot.classList.add('dot');

  dot.textContent = index + 1;

  dot.onclick = () => {
    console.log(index);
    counter = index;
    imgWrapper.removeChild(imgWrapper.lastChild);
    imgWrapper.appendChild(imgArray[index]);
  }
  return dot;
}

imgArray.forEach((item, index) => {
  console.log(item);
  dotContainer.append(genNavDot(index));
})




const menuToggler = () => {
  if (menu.classList.contains('visible')) {
    menu.classList.remove('visible');
  } else {
    menu.classList.add('visible');
  }
}

header.onclick = menuToggler;

const interval = setInterval(function() {
  ++counter;
  replaceImg();
}, 3900);
