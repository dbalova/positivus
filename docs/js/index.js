import '../main.scss';
import '../assets/images/logo.svg';
import '../assets/images/main.svg';
import '../assets/images/dribbble.svg';
import '../assets/images/hubspot.svg';
import '../assets/images/notion.svg';
import '../assets/images/netflix.svg';
import '../assets/images/zoom.svg';
import '../assets/images/amazon.svg';
import '../assets/images/card_1.svg';
import '../assets/images/card_2.svg';
import '../assets/images/card_3.svg';
import '../assets/images/card_4.svg';
import '../assets/images/card_5.svg';
import '../assets/images/card_6.svg';
import '../assets/images/arrow_dark.svg';
import '../assets/images/arrow_light.svg';
import '../assets/images/services-proposal.svg';
import '../assets/images/plus.svg';
import '../assets/images/minus.svg';
import '../assets/images/team-card_1.svg';
import '../assets/images/team-card_2.svg';
import '../assets/images/team-card_3.svg';
import '../assets/images/team-card_4.svg';
import '../assets/images/team-card_5.svg';
import '../assets/images/team-card_6.svg';
import '../assets/images/social.svg';
import '../assets/images/bubble.svg';
import '../assets/images/bubble_min.svg';
import '../assets/images/arrow_left.svg';
import '../assets/images/arrow_right.svg';
import '../assets/images/star.svg';
import '../assets/images/form_img.svg';
import '../assets/images/twitter.svg';
import '../assets/images/facebook.svg';
import '../assets/images/social_light.svg';
import '../assets/images/mode.svg';
import '../assets/images/sprite.svg';

let styleMode = localStorage.getItem('styleMode');
const styleToggle = document.querySelector('.header__switcher-button');

const enableDarkStyle = () => {
  document.body.classList.add('darkstyle');
  localStorage.setItem('styleMode', 'dark');
}

const disableDarkStyle = () => {
  document.body.classList.remove('darkstyle');
  localStorage.setItem('styleMode', 'light');
}

styleToggle.addEventListener('click', () => {
  styleMode = localStorage.getItem('styleMode');
  console.log(styleMode);
  if (styleMode !== 'dark') {
  enableDarkStyle();
  } else {
  disableDarkStyle();
  }
});
if (styleMode === 'dark') {
  enableDarkStyle();
}

document.addEventListener('DOMContentLoaded', function () {
  const stepsItems = document.querySelectorAll('.steps__item');

  stepsItems.forEach(item => {
  const header = item.querySelector('.steps__header');
  const body = item.querySelector('.steps__body');

  header.addEventListener('click', function () {
    const isOpen = item.classList.contains('open');
    if (isOpen) {
    item.classList.remove('open');
    body.style.maxHeight = '0';
    body.style.opacity = '0';
    } else {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
    body.style.opacity = '1';
    }
  });
  });
});

const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');
const slides = document.querySelectorAll('.testimonials__slider-item');
const indicators = document.querySelectorAll('.testimonials__indicator-button');
const slider = document.querySelector('.testimonials__slider-list');

let currentSlideIndex = 0;

function addActive() {
  indicators[currentSlideIndex].classList.add('active');
}
function removeActive() {
  indicators[currentSlideIndex].classList.remove('active');
}

function nextSlide() {
  if (currentSlideIndex <= (slides.length - 2)) {
  removeActive();
  currentSlideIndex++;
  slider.scrollBy({
    left: 100,
    behavior: 'smooth'
  });
  addActive();
  }
  if (currentSlideIndex == (slides.length - 1)) { arrowRight.disabled = true;}
}

function previousSlide() {
  if (currentSlideIndex >= 1) {
  removeActive();
  currentSlideIndex--;
  slider.scrollBy({
    left: -100,
    behavior: 'smooth'
  });
  addActive();
  }
  if (currentSlideIndex == 0) {
  arrowLeft.disablet = true;
  }
}
arrowLeft.addEventListener('click', previousSlide);
arrowRight.addEventListener('click', nextSlide);