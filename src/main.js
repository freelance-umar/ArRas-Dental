// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { initNavbar } from './js/navbar';
import { initSwipers } from './js/swiper';
import { initAnimate } from './js/animate';
import { initModal } from './js/modal';
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSwipers();
  initAnimate();
  initModal();
});
