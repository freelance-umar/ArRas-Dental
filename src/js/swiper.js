// src/js/initSwipers.js

import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/autoplay';

export function initSwipers() {
    // Swiper 1 Hero
    const thumbsSwiper = new Swiper('.floating-thumbs', {
        spaceBetween: 6,
        slidesPerView: 4,
        loop: true,
        watchSlidesProgress: true,
        loopedSlides: 4
    });

    const mainSwiper = new Swiper('.main-swiper', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        thumbs: {
        swiper: thumbsSwiper,
        },
    });

    // Swiper 2 Laboratorium
    const thumbsSwiperLab = new Swiper('.floating-thumbs-lab', {
        spaceBetween: 6,
        slidesPerView: 4,
        loop: true,
        watchSlidesProgress: true,
        loopedSlides: 4
    });

    const mainSwiperLab = new Swiper('.main-swiper-lab', {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 4,
        autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        },
        thumbs: {
        swiper: thumbsSwiperLab,
        },
    });
    
    // Swiper About
    new Swiper('.about__inner__body__gallery', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      slideClass: 'swiper-about-slide',
    });
    // swiper services
    new Swiper('.services__bottom__body', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      slideClass: 'services__bottom__card',
    });
    // Swiper lab gallery
    new Swiper('.laboratorium__gallery__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      grabCursor: true,
      slideClass: 'laboratorium__gallery__img',
    });
    // Swiper lab gallery
    new Swiper('.doctors__swiper', {
      slidesPerView: 'auto',
      spaceBetween: 10,
      freeMode: true,
      grabCursor: true,
      slideClass: 'doctors__card',
    });
    
    // Select DOM elements
    const galleryContainer = document.querySelector('.gallery__klinik__swiper');
    const navItems = document.querySelectorAll('.gallery__nav__child');

    // Import all images using Vite's import.meta.glob (eager = import at build time)
    const allImages = {
    praktek: import.meta.glob('/src/assets/images/optimized/gallery/*.jpg', { eager: true }),
    produk: import.meta.glob('/src/assets/images/optimized/lab/gallery/*.jpg', { eager: true }),
    laboratorium: import.meta.glob('/src/assets/images/optimized/galeri_lab/*.jpg', { eager: true }),
    };

    // Map to your original gallery structure
    const galleries = {
    praktek: {
        images: Object.values(allImages.praktek).map(mod => mod.default),
    },
    produk: {
        images: Object.values(allImages.produk).map(mod => mod.default),
    },
    laboratorium: {
        images: Object.values(allImages.laboratorium).map(mod => mod.default),
    },
    };

    // Create a single image container element
    function createKlinikImage(src, alt = 'Klinik Image') {
    const container = document.createElement('div');
    container.classList.add('gallery__klinik__img');

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;

    container.appendChild(img);
    return container;
    }

    // Update gallery when a tab is clicked
    function updateGallery(groupKey) {
    const group = galleries[groupKey.toLowerCase()];
    if (!group) return;

    // Clear old images
    galleryContainer.innerHTML = '';

    // Insert new images
    group.images.forEach(src => {
        const el = createKlinikImage(src);
        galleryContainer.appendChild(el);
    });

    // Scroll back to start
    galleryContainer.parentElement.scrollTo({ left: 0, behavior: 'smooth' });
    }

    // Add click listeners to tabs
    navItems.forEach(item => {
    item.addEventListener('click', () => {
        // Update active tab
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        const key = item.textContent.trim().toLowerCase();
        updateGallery(key);
    });
    });

    // Initial load
    updateGallery('praktek');

    // custom swiper for gallery
    // Manual Drag
    const container = document.querySelector('.gallery__klinik__swiper__outer');

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    container.addEventListener('mousedown', (e) => {
        e.preventDefault(); // prevent text/image selection
        isDragging = true;
        container.classList.add('active');
        startX = e.pageX;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - startX) * 50; // adjust scroll speed
        container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.classList.remove('active');
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.classList.remove('active');
    });
}
