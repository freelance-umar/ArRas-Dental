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

// Clone once for seamless loop
const originalCards = Array.from(track.children);
originalCards.forEach(card => {
  track.appendChild(card.cloneNode(true));
});

// Wait until DOM paints to get full width
    requestAnimationFrame(() => {
      const totalWidth = track.scrollWidth / 2; // Only width of the original set

      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: `-=${totalWidth}`,
        duration: 30,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });

      // Pause on hover
      const wrapper = document.querySelector('.testimoni__body');
      wrapper.addEventListener('mouseenter', () => gsap.globalTimeline.pause());
      wrapper.addEventListener('mouseleave', () => gsap.globalTimeline.play());
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

  // Modal
  const mobileModal = document.getElementById('mobileServiceModal');
  const mobileModalBody = document.getElementById('mobileModalBody');

  const overlay = document.getElementById('modalOverlay');
  const modalContentDesktop = document.getElementById('cardModalContent');
  const backdrop = document.getElementById('modalBackdrop');

  const closeBtns = document.querySelectorAll('.close-button');

  const serviceDescriptions = {
    "Pencabutan Gigi": "Pencabutan dengan topical dan local anastesi untuk meminimalisir nyeri.",
    "Gigi Palsu": "Semua jenis gigi palsu siap dalam waktu maksimal 2 hari.",
    "Tambal Gigi": "Tambal gigi untuk mengatasi kerusakan akibat karies atau trauma.",
    "Bleaching": "Pemutihan gigi dengan metode terbaik, dengan atau tanpa sinar.",
    "Karang Gigi": "Membersihkan karang gigi secara menyeluruh dan efektif.",
    "Perawatan Saluran Akar": "Menjaga dan merawat jaringan akar gigi secara profesional.",
    "Lab Pembuatan Gigi Palsu": "Klinik pertama di Kalimantan dengan lab pembuatan gigi sendiri.",
    "Layanan Lainnya": "Hubungi kami untuk layanan khusus lainnya yang tersedia."
  };

  document.querySelectorAll('.services__bottom__card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h1')?.innerText?.trim() || '';
      const desc = card.querySelector('p')?.innerText?.trim() || serviceDescriptions[title] || '';
      const img = card.querySelector('.image-wrap img');
      const imgSrc = img ? img.getAttribute('src') : '';
      const imgAlt = img ? img.getAttribute('alt') || title : '';

      const modalContent = `
        <div style="display: flex; gap: 4rem; padding: 6rem 6rem 0 6rem; margin-bottom: 4rem;">
          <img src="${imgSrc}" alt="${imgAlt}" style="width: 8rem; height: 8rem; object-fit: contain; margin-bottom: 1rem;" />
          <div>
            <h2 style="font-family: inherit; font-weight: 600; font-size: 2.4rem; color: var(--color-primary);">${title}</h2>
            <p style="font-family: 'Inter', sans-serif; font-weight: 400; font-size: 1.6rem; color: #434343;">${desc}</p>
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <button class="button button-primary button-full">Hubungi Admin 1</button>
          <button class="button button-secondary button-full">Hubungi Admin 2</button>
        </div>
      `;

      const rect = card.getBoundingClientRect();

      modalContentDesktop.innerHTML = `
         <button class="button button-primary">Hubungi Admin 1</button>
         <button class="button button-secondary">Hubungi Admin 2</button>
      `;

      // Position modal near the card (e.g., below it)
      modalContentDesktop.style.top = `${rect.bottom + 10}px`;
      modalContentDesktop.style.left = `${rect.left}px`;


      
      // Responsive logic
      if (window.innerWidth <= 1440) {
        mobileModalBody.innerHTML = modalContent;
        mobileModal.style.display = 'block';
      } else {
        
        overlay.classList.add('active');
        overlay.style.display = 'block';
      }
    });
  });

  // Close both modals
  closeBtns.forEach(btn => {
    btn.onclick = () => {
      mobileModal.style.display = 'none';
      // desktopModal.style.display = 'none';
    };
  });

  window.onclick = (e) => {
    if (e.target === mobileModal) mobileModal.style.display = 'none';
  };
  // Close when clicking outside
  backdrop.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlay.style.display = 'none';
  });

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

});
