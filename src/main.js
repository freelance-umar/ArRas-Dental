document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.navbar__menu');
  const mobileMenu = document.querySelector('.mobile__menu');
  const closeMenu = document.querySelector('.mobile__menu__back');
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });

  const scrollContainer = document.querySelector('.about__inner__body__gallery');
  const scrollLeftBtn = document.querySelector('.scroll-left');
  const scrollRightBtn = document.querySelector('.scroll-right');

  const scrollAmount = 400;

  scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });

  scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

    // Swiper

    const thumbsSwiper = new Swiper('.floating-thumbs', {
      spaceBetween: 6,
      slidesPerView: 4,
      loop: true,                  // 👈 enable loop
      watchSlidesProgress: true,
      loopedSlides: 4              // 👈 must match number of slides
    });
    const mainSwiper = new Swiper('.main-swiper', {
      spaceBetween: 10,
      loop: true,                  // 👈 enable loop
      loopedSlides: 4,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });

    // swiper lab
    const thumbsSwiperLab = new Swiper('.floating-thumbs-lab', {
      spaceBetween: 6,
      slidesPerView: 4,
      loop: true,                  // 👈 enable loop
      watchSlidesProgress: true,
      loopedSlides: 4              // 👈 must match number of slides
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


    // Testimoni
    const track = document.querySelector('.testimoni__body__content');

    // Clone for seamless looping
    const clone = Array.from(track.children)
    // track.parentNode.appendChild(clone);
    clone.forEach(card => {
      track.appendChild(card.cloneNode(true))
    })
    // track.appendChild(clone)

    const totalWidth = track.offsetWidth;

    // Create GSAP timeline
    const tl = gsap.timeline({ repeat: -1, ease: "none" });

    tl.to('.testimoni__body__content', {
      x: `-=${totalWidth}`,
      duration: 30,
    });

    // Pause on hover
    const wrapper = document.querySelector('.testimoni__body');

    wrapper.addEventListener('mouseenter', () => {
      tl.pause();
    });

    wrapper.addEventListener('mouseleave', () => {
      tl.play();
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

    // Swiper lab gallery
    const galleryContainer = document.querySelector('.gallery__klinik__swiper');
    const navItems = document.querySelectorAll('.gallery__nav__child');
    const galleries = {
      "praktek" : {
        "src": "/src/assets/images/optimized/gallery/",
        "images": [
          "image-1.jpg",
          "image-2.jpg",
          "image-3.jpg",
          "image-4.jpg",
          "image-5.jpg",
          "image-6.jpg",
          "image-7.jpg",
          "image-8.jpg",
          "image-9.jpg",
          "image-10.jpg",
          "image-11.jpg",
          "image-12.jpg",
        ]
      },
      "produk" : {
        "src": "/src/assets/images/optimized/lab/gallery/",
        "images": [
          "image-1.jpg",
          "image-2.jpg",
          "image-3.jpg",
          "image-4.jpg",
          "image-5.jpg",
          "image-6.jpg",
          "image-7.jpg",
          "image-8.jpg",
        ]
      },
      "laboratorium" : {
        "src": "/src/assets/images/optimized/galeri_lab/",
        "images": [
          "image-1.jpg",
          "image-2.jpg",
          "image-3.jpg",
          "image-4.jpg",
          "image-5.jpg",
          "image-6.jpg",
          "image-7.jpg",
          "image-8.jpg",
        ]
      }
    }
    function createKlinikImage(src, alt = 'Klinik Image') {
      const container = document.createElement('div');
      container.classList.add('gallery__klinik__img');

      const img = document.createElement('img');
      img.src = src;
      img.alt = alt;

      container.appendChild(img);
      return container;
    }
    function updateGallery(groupKey) {
      const group = galleries[groupKey.toLowerCase()];
      if (!group) return;

      // Clear existing content
      galleryContainer.innerHTML = '';

      // Rebuild gallery
      group.images.forEach(filename => {
        const fullSrc = group.src + filename;
        const el = createKlinikImage(fullSrc);
        galleryContainer.appendChild(el);
      });

      // Reset scroll to start
      galleryContainer.parentElement.scrollTo({ left: 0, behavior: 'smooth' });
    }
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        // Activate tab
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Use lowercase innerText as the group key
        const key = item.textContent.trim().toLowerCase();

        updateGallery(key);
      });
    });
    updateGallery('praktek');
    // const imageGalleryKlinik = [
    //   "image-1.jpg",
    //   "image-2.jpg",
    //   "image-3.jpg",
    //   "image-4.jpg",
    //   "image-5.jpg",
    //   "image-6.jpg",
    //   "image-7.jpg",
    //   "image-8.jpg",
    //   "image-9.jpg",
    //   "image-10.jpg",
    //   "image-11.jpg",
    //   "image-12.jpg",
    // ]
    // function createKlinikImage(src, alt = 'Klinik Image') {
    //   // Create the container div
    //   const container = document.createElement('div');
    //   container.classList.add('gallery__klinik__img');

    //   // Create the img element
    //   const img = document.createElement('img');
    //   img.src = src;
    //   img.alt = alt;

    //   // Append the image into the container
    //   container.appendChild(img);

    //   // Return the full element (so you can append it somewhere)
    //   return container;
    // }
    // const gallery = document.querySelector('.gallery__klinik__swiper');
    // imageGalleryKlinik.forEach(filename => {
    //   const el = createKlinikImage(`/src/assets/images/optimized/gallery/${filename}`);
    //   gallery.appendChild(el);
    // });

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

});
