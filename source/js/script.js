'use strict';

var navMain = document.querySelector('.header-nav');
var navToggle = document.querySelector('.header-nav__toggle');
var navOpen = navToggle.querySelector('.header-nav__toggle--open');
var navClose = navToggle.querySelector('.header-nav__toggle--close');
var navList = document.querySelector('.nav-list');
navToggle.addEventListener('click', function() {
  if(navMain.classList.toggle('header-nav--closed') === true) {
   navOpen.classList.remove('header-nav__toggle--open-inactive');
   navClose.classList.add('header-nav__toggle--close-inactive');
   navMain.classList.remove('header-nav--opened');
   navMain.classList.add('header-nav--closed');
  } else {
    navOpen.classList.add('header-nav__toggle--open-inactive');
    navClose.classList.remove('header-nav__toggle--close-inactive');
    navMain.classList.remove('header-nav--closed');
    navMain.classList.add('header-nav--opened');
    navList.style.display = 'flex';
  }
});
  

//навигация на странице Изделия
let docEl = document.documentElement;
console.log(docEl);
let contentNav = document.querySelector('.content-nav');
contentNav.addEventListener('click', function(evt) {
  let text = evt.target.innerHTML;
  console.log(text);

  let textAttribute = document.querySelector(`[dataset="${text}"]`);
  console.log(textAttribute);

  getCoords(textAttribute);
});

function getCoords (element) {
  let coord = element.offsetTop - 120;

  let difference = coord - window.scrollY;
  let step = difference / 25;
      
  let interval = setInterval(function() {
      window.scrollTo(0, window.scrollY + step);
          
      if (Math.abs(window.scrollY - coord) < 70 ) {
          window.scrollTo(0, coord);
          clearInterval(interval);
      }
          
  }, 20);
}

//слайдер
let wrapper = document.querySelector('.slyder__wrapper');
let left = document.querySelector('.slyder-left');
let right = document.querySelector('.slyder-right');
let slyderElements = wrapper.querySelectorAll('.slyder__item');
var index = 0;
console.log(slyderElements);
let slyderWidth = wrapper.offsetWidth;
console.log(slyderWidth);

right.addEventListener('click', function (){
  index = slyderElements[index].getAttribute('id');
  left.style.display = 'block';
  if (index <= slyderElements.length - 1) {
    var sum = -(slyderWidth * index);
    wrapper.style.transform = `translateX(${sum}px)`;
    console.log(index);
    
  }
    if(index === slyderElements.length) {
      right.style.display = 'none';
    }
   return index;
});

left.addEventListener('click', function() {
  index--;
  console.log(index);
  right.style.display = 'block';
  var sumBack = -(slyderWidth * index);
  wrapper.style.transform = `translateX(${sumBack}px)`;
  if (index === 0) {
    left.style.display = 'none';
  }
});



